const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const ImageKit = require('imagekit');

const app = express();
const PORT = 4000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connection to mongodb
mongoose.connect("mongodb+srv://yashkawade:qTauHQ8ZBw2ViAj1@cluster0.urn2uyj.mongodb.net/?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});


const imagekit = new ImageKit({
  urlEndpoint: 'https://ik.imagekit.io/tb5em07q5',
  publicKey: 'public_n1qVVkAdBe09dzJ2xXnLSzx6wxY=',
  privateKey: 'private_T3IsMlHI+tuCLurhZnIlt2Wopu4='
});


const connection = mongoose.connection;


connection.once("open", () => {
  console.log("MongoDB database connection established succesfully.");
});

app.get('/authimg', function (req, res) {
  var result = imagekit.getAuthenticationParameters();
  res.send(result);
});


// API endpoints

const userdatarouting = require("./routes/userdata");
app.use("/data", userdatarouting);

const authrouting = require("./routes/auth");
app.use("/auth", authrouting);

const conversationrouting = require("./routes/conversation");
app.use("/conv", conversationrouting);

const messagerouting = require("./routes/message");
app.use("/mess", messagerouting);

app.listen(PORT, () => {
  console.log("Server is running on port: " + PORT);
});


