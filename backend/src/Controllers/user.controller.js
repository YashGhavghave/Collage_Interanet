import { User } from "../Model/User.model";

export const createuser = async(name, email, pass)=>{
    try{
        const existance = User.findOne({email})
        if (email == existance){
            return json({success: false, message:"User Already Exits"})
        }
        
        async(req, res)=>{
            await User.create({
                name:name,
                email:email,
                password:password
            })

            return res.json({success:true, message:"User Created Successfully"}).status(201)
        }
    }
    catch(error){
        throw new Error("User Creation Failed")
    }
}