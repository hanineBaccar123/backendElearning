const mongoose =  require('mongoose')
const userSchema =  new mongoose.Schema({

    firstname:String,
    lastname:String,
    email:{type : String, require:true, unique : true ,lowercase : true, match:[/^\S+@\S+\.\S+$/, "Please enter a valid email adress "],

    },
    password:{type: String, require:true , minlength:12  },
    role: { type:String, enum:['student','admin','teacher']},
    user_image: {type : String , require:false ,default:'client-care_15755360.png'},
    isActive:Boolean,
    isBanned:Boolean
});
const User = mongoose.model("User",userSchema)
module.exports= User;