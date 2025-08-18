const mongoose =  require('mongoose')
const AdminSchema =  new mongoose.Schema({

    firstname:String,
    lastname:String,
    email:{type : String, require:true, unique : true ,lowercase : true, match:[/^\S+@\S+\.\S+$/, "Please enter a valid email adress "],

    },
    password:{type: String, require:true , minlength:12  },
   
});
const Admin = mongoose.model("Admin",AdminSchema)
module.exports= Admin;