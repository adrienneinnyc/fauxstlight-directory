const express = require("express");
const path = require("path");
const { db } = require("./db");

const app = express();

const port = process.env.PORT || 5000;

const syncDb = () => db.sync();

const setupServer = async () => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use(express.static(path.join(__dirname, "client/build")));

  app.use("/api", require("./api"));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + "/client/build/index.html"));
  });
};

const bootServer = async () => {
  try {
    await syncDb();
    await setupServer();
    app.listen(port);
    console.log("Listening on port " + port);
  } catch (error) {
    console.log(error);
  }
};

if (require.main === module) {
  bootServer();
} else {
  setupServer();
}

module.exports = app;
