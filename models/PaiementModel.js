const mongoose =  require('mongoose')
const PaiementSchema =  new mongoose.Schema({

    date:Date,
    montant:Float32Array,
    
});
const Paiement = mongoose.model("Paiement",PaiementSchema)
module.exports= Paiement;