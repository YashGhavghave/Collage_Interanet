import { User } from "../Model/User.model.js";
import bcrypt from 'bcrypt'

export const createuser = async (name, email, password) => {
  try {
    // Check if user exists
    const existance = await User.findOne({ email });
    const salt = 15;

    const Hashpass = await bcrypt.hash(password, salt)

    if (existance) {
      return { success: false, message: "User Already Exists" };
    }

    // Create new user
    const user = await User.create({
      name,
      email,
      password:Hashpass,
    });

    return {
      success: true,
      message: "User Created Successfully",
      user,
    };
  } catch (error) {
    return { success: false, message: error.message };
  }
};
