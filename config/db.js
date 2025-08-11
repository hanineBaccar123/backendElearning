const mongoose = require("mongoose")

module.exports.connectToMongoDb = async () => {
    mongoose.set('strictQuery', false)
    mongoose
    .connect(" ")
    .then(() => { console.log("connect to db") 

    })
    .catch((error) => { 
     console.log(error)
     })
}
//pvKCqF5yZEsIQEZj mot de passe base 