const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    mail:{
        type: String,
        required: [true,"le mail est requis"]
    },

    password:{
        type: String,
        required: [true,"le password est requis"]
    }
})

const userModel = mongoose.model("users", userSchema);
module.exports = userModel

//Creéation du model, c'est le fichier qui contiendra nos utilisateurs, c'est le fils entre nos utilisateurs et nos servers.