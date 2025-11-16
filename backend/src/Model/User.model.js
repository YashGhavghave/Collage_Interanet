import mongoose from 'mongoose';

const Usermodel = new mongoose.Schema({

    username:{
        type:String,
        required: true,
        trim: true,
    },
    email:{
        type:String,
        required:true,
        unique: true,
    },
    password:{
        type:String,
        required:true,
        minlength: 6
    },
    role:{
        type:String,
        default: "user"
    },
},
{timestamps:true})

export const User = mongoose.model("User", Usermodel)