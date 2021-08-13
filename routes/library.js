const express = require('express')
const router = express.Router({mergeParams: true})
const { Admin } = require('../models')
const { Item } = require("../models")
const { Friend } = require("../models")

router.get("/", async (req, res) => {
    if (req.session.adminId !== undefined) {
        const admin = await Admin.findOne({where: {id: req.session.adminId}})

        const items = await Item.findAll({
            where: {
                adminId: req.session.adminId
            }
        })

        const friends = await Friend.findAll({})

        res.render('library.ejs', {
            admin: admin,
            items: items,
            friends: friends
        })

    }
    else {
        res.redirect("/login")
    }
})

module.exports = router