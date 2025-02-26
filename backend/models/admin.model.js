import bcrypt from 'bcrypt'
import mongoose from 'mongoose';


const UserSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true 
  },
  email: { 
    type: String, 
    required: true, 
    unique: true 
  },
  password: {
     type: String,
      required: true
     },
  otp: { 
    type: String,
     default: null 
    },
  otpExpires: { 
    type: Date, 
    default: null 
  },
});

UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

UserSchema.methods.comparePassword = function (password) {
  return bcrypt.compare(password, this.password);
};

export const Admin = mongoose.model('Admin', UserSchema);
