const mongoose =  require('mongoose')
const TeacherSchema =  new mongoose.Schema({

    firstname:String,
    lastname:String,
    email:{type : String, require:true, unique : true ,lowercase : true, match:[/^\S+@\S+\.\S+$/, "Please enter a valid email adress "],

    },
    password:{type: String, require:true , minlength:12  },
   
});
const Teacher = mongoose.model("Teacher",TeacherSchema)
module.exports= Teacher;