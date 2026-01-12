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

  } catch (error) {
    res.json({ success: false, message: error.message });
  }
});
