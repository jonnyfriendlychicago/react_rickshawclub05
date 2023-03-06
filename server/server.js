const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const port = 8000;

const router = express.Router();
router.use((_, rsp) => {
  rsp.sendFile(path.join(
    __dirname, "../client/build/index.html"
  ));
});

app.use(
  cors(),
  express.json(),
  express.urlencoded({extended: true}),
  express.static("../client/build"),
  router
);

app.listen(
  port,
  () => console.log(`Now listening on port ${port}...`)
);