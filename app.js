const express = require("express");
const app = express();
const port = 3000;
const session = require('express-session')

app.set("viewengine","ejs");
app.use(express.urlencoded({extended: true}));
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


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });