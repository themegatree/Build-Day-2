const express = require('express')
const router = express.Router({mergeParams: true})
const { Admin } = require('../models')
const { Friend } = require("../models")
const bcrypt = require('bcryptjs')


router.get("/", (req,res) => {
    res.render("login.ejs")
})

router.post("/", async (req,res) =>{
    const admin = await Admin.findOne({
        where:{
            username: req.body.username
        }
    })

    const home = await Friend.findOne({
        where:{
            name: req.body.username
        }
    })

    if (admin && bcrypt.compareSync(req.body.password, admin.passwordHash)) {
        req.session.adminId = admin.id
        req.session.homeId = home.id

        res.redirect("/library")
    }
    else{
        res.redirect("/login")
    }

})


module.exports = router