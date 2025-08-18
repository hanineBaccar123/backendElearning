const mongoose =  require('mongoose')
const StudentSchema =  new mongoose.Schema({

    firstname:String,
    lastname:String,
    email:{type : String, require:true, unique : true ,lowercase : true, match:[/^\S+@\S+\.\S+$/, "Please enter a valid email adress "],

    },
    password:{type: String, require:true , minlength:12  },
   
});
const Student = mongoose.model("Student",StudentSchema)
module.exports= Student;