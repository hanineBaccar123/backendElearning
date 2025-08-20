const mongoose =  require('mongoose')
const PaiementSchema =  new mongoose.Schema({

    date:Date,
    montant:Number,
    
});
const Paiement = mongoose.model("Paiement",PaiementSchema)
module.exports= Paiement; 