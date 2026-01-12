import bcrypt from 'bcryptjs';
import userModel from '../models/userModel';

export const register = async(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.json({ success: false, message: 'missing user details' });
  }

  try {
    const exidtinguser = await userModel.findOne({ email });
    if (exidtinguser) {
      return res.json ({success:false, message:"user already exists"})
    };
    const hashedpassword = await bcrypt.hash(password, 10);
    const user = new userModel({
      name,email,password:hashedpassword})
    await user.save()
    

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '7d',
    });
    
    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      samesite: process.env.NODE_ENV === 'poduction' ? 'none' : 'strict',
      maxAge: 7*24*60*60*1000,
    });

  } catch (error) {
    res.json({ success: false, message: error.message });
  }
});
