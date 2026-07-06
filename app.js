const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const mongoose = require("mongoose");
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.use(express.static("public"));

var methodOverride = require("method-override");
app.use(methodOverride("_method"));
const allRoutes = require('./routes/allRoutes');
const addUserRoutes = require('./routes/addUser');


////////////////////dns/////////////////////////
const dns = require("dns");
dns.setServers(["1.1.1.1", "8.8.8.8"]);
///////////////////////////////////////////////
/////////////////////////////////////////////////
const path = require("path");
const livereload = require("livereload");
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, "public"));

const connectLivereload = require("connect-livereload");
app.use(connectLivereload());

liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});
////////////////////////////////////////////////

mongoose
  .connect(
    "mongodb+srv://odoudah7_db_user:YjEA2uuXj0Sfhl4Y@cluster0.eztxulf.mongodb.net/all-data?appName=Cluster0",
    {
      serverSelectionTimeoutMS: 5000,
    },
  )
  .then(() => {
    app.listen(port, () => {
      console.log(`http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
app.use(allRoutes);
app.use('/user/add.html', addUserRoutes);