const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

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
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established succesfully.");
});

// API endpoints

const userdatarouting = require("./routes/userdata");
app.use("/data", userdatarouting);

const authrouting = require("./routes/auth");
app.use("/auth", authrouting);


app.listen(PORT, () => {
  console.log("Server is running on port: " + PORT);
});
