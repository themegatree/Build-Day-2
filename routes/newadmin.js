const express = require('express')
const router = express.Router({mergeParams: true})
const { Admin } = require('../models')
const { Friend } = require('../models')
const bcrypt = require('bcryptjs');

router.get("/", (req, res) => {
  res.render("new-admin.ejs")
})

router.post('/', async (req, res) => {

  const admin = await Admin.create({
    username: req.body.username,
    passwordHash: bcrypt.hashSync(req.body.password)
  })

  const friend = await Friend.create({
    name: req.body.username
  })

  req.session.adminId = admin.id
  req.session.homeId = friend.id
    res.redirect('/library')
})

module.exports = router