var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

const PORT = 3010;

const app = express();
app.use(express.static(__dirname));

app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log(`Listenning on port ${PORT}`);
});
