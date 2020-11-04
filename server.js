const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const users = require("./routes/api/users");
const recipes = require("./routes/api/recipes");
const blog = require ("./routes/api/blog");
const cors = require('cors');

const app = express();

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());
app.use(cors({origin:'http://localhost:3000'}))

// DB Config
const db = require("./config/keys").mongoURI;
const uri = "mongodb+srv://sulagnaDR:dinnerready@dinner-ready.rxwcz.mongodb.net/Dinnerready?retryWrites=true&w=majority";

// Connect to MongoDB
mongoose
  .connect(
    uri,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));


// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://sulagnaDR:dinnerready@dinner-ready.rxwcz.mongodb.net/admin?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("Dinnerready").collection("users");
// console.log("MongoDB connected successfully");
//   // perform actions on the collection object
//   client.close();
// });

// Passport config
require("./config/passport")(passport);


// Passport middleware
app.use(passport.initialize());


// Routes
app.use("/api/users", users);
app.use("/api/recipes", recipes);
app.use("/api/recipes/id", recipes);
app.use("/api/blog", blog);


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server up and running on port ${port} !`));