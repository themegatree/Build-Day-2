const express = require('express')
const router = express.Router({mergeParams: true})

router.get("/", (req, res) => {
  res.render("library.ejs")
})

module.exports = router