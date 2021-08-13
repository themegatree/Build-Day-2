const express = require('express')
const router = express.Router({mergeParams: true})
const { Admin } = require('../models')
const b = require('bcryptjs')


router.get("/", (req,res) => {
    res.render("login.ejs")
})

router.post("/", async (req,res) =>{
    const admin = await Admin.findOne({
        where:{
            username: req.body.username
        }
    })

    if (admin && b.compareSync(req.body.password, admin.passwordHash)) {
        req.session.adminId = admin.id
        res.redirect("/library")
    }
    else{
        res.redirect("/login")
    }

})


module.exports = router