const userRouter = require("express").Router() // Constante pour créer un routeur qui a pour nom userRouter
const userModel = require("../models/userModel") // Constante qui va contenir le userModel

userRouter.get("/login", async (req, res)=>{ //Cette ligne permet de creer la route login
    res.render('login.twig')// Elle nous ramene sur la page login twig, pour l'afficher
})

userRouter.post("/login", async (req, res)=>{ //Nous somme sur la page login.twig, ou on ajoute mail et mot de passe
    try { //Il faut que l'adresse mail et le mot de passe soit identique à ce qu'on a sur la base de donnée
        let user = await userModel.findOne({mail: req.body.mail, password: req.body.password})
        if (user) {
            res.redirect('/addProject')//pour nous renvoyer sur la page addProject
        }else{//Sinon redirige moi sur la page d'acceuil si les informations sont fausses
            res.redirect('/')
        }
    } catch (error) {       
    }
})



module.exports = userRouter