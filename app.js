const express = require("express");
const app = express();
const port = 3000;
const session = require('express-session')
const methodOverride = require('method-override')

app.set("viewengine","ejs");
app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'))
app.use(express.static(__dirname + 'public')) //?????
app.use(session({
  secret: 'boardgames',
  resave: false,
  saveUninitialized: true,
}))

const indexRouter = require("./routes/index.js");
app.use("/", indexRouter);

const signupRouter = require("./routes/newadmin.js");
app.use("/register", signupRouter);

const libraryRouter = require("./routes/library.js");
app.use("/library", libraryRouter);

const signinRouter = require("./routes/signin.js");
app.use("/login", signinRouter);

const addItemRouter = require("./routes/addItem.js");
app.use("/additem", addItemRouter);

const addFriendRouter = require("./routes/addFriend.js");
app.use("/addfriend", addFriendRouter);

const { Item } = require("./models")
app.delete('/:id', async(req,res) => {
  await Item.destroy({
      where: {id: req.params.id}
  })
  res.redirect('/library')
})

app.put("update/:id", async(req,res) =>{
  await Item.update({
    FriendId: 2
  }, { where: {id: req.params.id}})
  res.redirect("/library")
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });