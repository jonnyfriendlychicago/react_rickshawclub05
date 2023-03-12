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

// begin section taken from https://www.stackhawk.com/blog/react-cors-guide-what-it-is-and-how-to-enable-it/
// app.get('/cors', (req, res) => {
//   res.set('Access-Control-Allow-Origin', '*');
//   res.send({ "msg": "This has CORS enabled" })
//   })

// end section 

app.listen(
  port,
  () => console.log(`Now listening on port ${port}...`)
);