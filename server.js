const express = require("express"); //Ca permet d'appeler la bibliotheque express ca facilite l'intégration des données
const mongoose = require("mongoose");// Mongoose est le lien entre mongoDB et le serveur
require("dotenv").config()// Caché les données et aussi creer des exception lors du transfert de donnée de github
const projectRouter = require("./routes/projectRouter");//Céation du fichier routeur pour ajouter/afficher les projets
const userRouter = require("./routes/userRouter");//Création du fichier routeur pour la création du login
const db = process.env.BDD_URL //Création du cryptage 

const app = express()


app.use(express.static("./assets"))// Permet d'afficher tout ce qui est dans asset
app.use(express.urlencoded({extended: true})) //on encode notre formulaire et grace à cettte ligne on va le désencodé
app.use(express.json())//Si on veut lire du json
app.use(projectRouter)//Fait appel au fichier projectRouter
app.use(userRouter)//Fait appel au fichier userRouter


app.listen(3000, (err)=>{ //Ecoute sur le port 3000 du server
    if (err){ //Si erreur log moi l'eereur
        console.log(err);
    }else{
        console.log("Vous etes connecté");
    }
})

mongoose.set('strictQuery', true); //Ce bloc la permet de savoir si la base de donnée est bien connecté
mongoose.connect(db,(err)=>{
    if (err) {
        console.log(err);
    }else{
        console.log("base de donné opérationelle");
    }
})