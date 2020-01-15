const express = require("express");
const mongoose = require("mongoose");
const app = express();
const routes = require("./routes");

mongoose.connect(
  "mongodb+srv://omnistack:omnistack2019@omnistack-tx9vf.mongodb.net/week10?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

app.use(express.json());
app.use(routes);

app.listen(3333);
