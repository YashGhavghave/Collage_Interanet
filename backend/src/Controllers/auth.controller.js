import { User } from "../Model/User.model.js";
import { GetToken } from "../Middleware/auth.middleware.js";
import bcrypt from 'bcrypt'

export const UserValidate = async(email, password, rememberMe)=>{
    try {
        if(!email || !password){
            return {Success: false, message:"Ensure to Provide Login Fields"}
        }
        const Existance = await User.findOne({email})
        if (!Existance) return { Success:false, message: "User Not Found" }

        const Pass = bcrypt.compare(Existance.password, password)
        if( !Pass ) return { Success:false, message: "Password Invalid" }

        const Token = GetToken(Existance._id, Existance.email, rememberMe)

        return {
            Success:true,
            message:"Successful Login",
            Existance,
            Token
        }
    } catch (error) {
        console.log(error)
        return {
            Success:false,
            message:error.message
        }
    }
}