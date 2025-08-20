const mongoose =  require('mongoose')
const CommentaireSchema =  new mongoose.Schema({
    rating:Number,
    description:String
});
const Commentaire = mongoose.model("Commentaire",CommentaireSchema)
module.exports= Commentaire;