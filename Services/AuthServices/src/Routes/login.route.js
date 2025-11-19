import { UserValidate } from "../Controllers/auth.controller.js";
import express from "express";

const Router = express.Router()

Router.post('/login', async(req, res)=>{
    try {

        const {email, password, rememberMe} = req.body;

        const result = await UserValidate(email, password, rememberMe)

        if (!result.Success) return res.status(401).json({message:message})

        const Token = result.Token;
        const Expiry = result.expiresIn;

        res.cookie("Token", 
            Token,
            {
            httpOnly:true,
            secure:false,
            sameSite:"Lax"
            },
        )

        return res.json({
            message: result.message,
            token: Token,
            expiresIn: Expiry
        })
        
    } catch (error) {
        return res.json(
            { message: "Server Error" || message }
        ).status(500)
    }
})

export default Router