const path = require("path");
const express = require("express");
const expressEjsLayouts = require("express-ejs-layouts");
const app = express();
const router = require("./routes/index.js");

app.set("views", path.join(__dirname, "./views"));

app.use(express.static(path.join(__dirname, "./public")));

app.set("view engine", "ejs");

app.use(expressEjsLayouts);
app.set("layout", "./layouts/index");

app.use("/", router);

let port = process.env.PORT;
if (port == null || port == "") {
    port = 2525;
}

app.listen(port, () => {console.log("server running!")});