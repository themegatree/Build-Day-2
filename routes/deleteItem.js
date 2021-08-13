const express = require('express')
const router = express.Router({mergeParams: true})
const { Item } = require('../models')

router.get("/", (req, res) => {
  res.render("new-admin.ejs")
})

router.delete('/:id', async (req, res) => {
    console.log("here")
    await Item.destory({
      where:{id:req.params.id}
  })

    res.redirect('/library')
})

module.exports = router