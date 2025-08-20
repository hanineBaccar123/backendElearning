const mongoose = require('mongoose')
const userModel = require("../models/UserModel") 


module.exports.getAllUsers = async (req,res) => {
    try {

        const usersList = await userModel.find()
        res.status(200).json({ usersList });

    }
    catch  (error){
        res.status(500).json({message : error.message})
    }
};

module.exports.getUsersById = async (req,res) => {
    try {

        const id = req.params.id     
        const user = await userModel.findById(id)
        res.status(200).json({user})

    }
    catch  (error){
        res.status(500).json({message : error.message});
    }
};


module.exports.addClient = async (req,res) => {
    try {

        const {firstname , lastname , email , password  }=req.body
        const role = "client" ;
        const user = new userModel({firstname , lastname , email , password})
        const addedUser = await user.save()
        res.status(200).json({addedUser})

    }
    catch  (error){
        res.status(500).json({message : error.message})
    }
}


module.exports.searchUsersByFirstName = async (req, res) => {
  
  try {

        const { firstname } = req.body;

    if (!firstname) {
      throw new Error("Please select a name");
    }

    const userList = await userModel.find({
      firstName: { $regex: firstname, $options: "i" }, // Debut
      //firstName: {$regex : `${firstName}$` , $options: "i" } Fin
    });

    if (userList.length === 0) {
      throw new Error("Aucune Utilisateur trouve pour ce nom");
    }

    res.status(200).json({ userList });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


module.exports.deleteUserById = async (req,res) => {
    try {

        const id = req.params.id     
        const user = await userModel.findByIdAndDelete(id)
        res.status(200).json("deleted")

    }
    catch  (error){
        res.status(500).json({message : error.message});
    }
};



module.exports.addClientV2 = async (req, res) => {
  try {
    //logique
    const userData = req.body;
    userData.role = "client";

    const user = new userModel(userData);
    const addedUser = await user.save();
    res.status(200).json({ addedUser });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


module.exports.addClientWithImage = async (req, res) => {
  try {
    //logique
    const userData = req.body;
    userData.role = "client";

    if(req.file){
        const {filename} = req.file
        userData.user_image= filename
    }

    const user = new userModel(userData);
    const addedUser = await user.save();
    res.status(200).json({ addedUser });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};







