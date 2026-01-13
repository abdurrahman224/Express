import mongoose from 'mongoose';

const userschema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  verifyOtp: { type: String, default: '' },
  verifyOtpExpire: { type: Number, default: 0 },
  isAccountVerified: { type: Boolean, default: false },
  resetotp: { type: String, default: '' },
  resetotpExpire: { type: Number, default: 0 },
});

const userModel = mongoose.models.users || mongoose.model('users', userschema);

export default userModel;
