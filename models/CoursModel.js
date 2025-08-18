const mongoose =  require('mongoose')
const CoursSchema =  new mongoose.Schema({

    name:String,
    prix:Float16Array,
    description:String

});
const Cours = mongoose.model("Cours",CoursSchema)
module.exports= Cours;