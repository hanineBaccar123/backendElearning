const { default: mongoose } = require("mongoose")
const userModel = require ("../models/UserModel")


module.exports.getAllUsers = async (req,res) => {
    try {

        const usersList = await userModel.find()
        res.status(200).json({usersList})

    }
    catch  (error){
        res.status(500).json({message : error.message})
    }
}

