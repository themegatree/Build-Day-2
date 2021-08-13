const express = require('express')
const router = express.Router({mergeParams: true})
const { Friend } = require('../models')

router.post('/', async (req, res) => {

  const friend = await Friend.create({
    name: req.body.friendName
  })

    res.redirect('/library')
})

module.exports = router