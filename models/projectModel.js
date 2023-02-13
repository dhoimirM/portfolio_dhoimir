const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
name:{
    type: String,
    required: [true, "pas de nom"],
},
url: {
    type: String,
    required: [true, "url est requis"]
},

githuburl: {
    type: String,
    required: [true, "url github est requis"]
},

description: {
    type: String,
    required: [true, "description est requis"]
},

img:{
    type: String,
    required: [false, "image est requis"]
}
})

const projectModel = mongoose.model("projects", projectSchema);
module.exports = projectModel

//Creéation du model, c'est le fichier qui contiendra nos utilisateurs, c'est le fils entre nos utilisateurs et nos servers.