require("dotenv").config();
// **** IMPORT DEPENDENCIES *****
const express = require("express");
const app = express();
const session = require("express-session");
const { json } = require("body-parser");
const massive = require("massive");
const cors = require("cors");
const port = process.env.PORT || 3001;
const passport = require("passport");

app.use(cors());
app.use(json());

//**** SESSIONS ****
app.use(
  session({
    resave: false,
    saveUninitialized: true,
    secret: process.env.SESSION_SECRET,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7
    }
  })
);

//***** PASSPORT ******
app.use(passport.initialize());
app.use(passport.session());

// //***** CONNECTION TO DB *******
// massive(process.env.CONNECTION_STRING)
//   .then(dbInstance => {
//     app.set("db", dbInstance);
//   })
//   .catch(err => console.log(err));

app.listen(port, () => {
  console.log(`BEEP Listening on port ${port}`);
});
