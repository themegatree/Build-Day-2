const express = require('express')
const router = express.Router({mergeParams: true})
const { Item } = require('../models')

router.get("/", (req, res) => {
  res.render("new-admin.ejs")
})

router.post('/', async (req, res) => {

  const item = await Item.create({
    name: req.body.itemName,
    rating: req.body.itemRating,
    adminId: req.session.adminId,
    friendId: req.session.homeId
  })

    res.redirect('/library')
})

module.exports = router