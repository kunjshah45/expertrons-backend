// import from libraries
const express = require("express");
const nunjucks = require("nunjucks");
var bodyParser = require("body-parser");

// const CONFIG = require('./config');

// custom routes imports
const index = require("./routes/index.js");
const societies = require("./routes/societies.js");
const members = require("./routes/members.js");
const charges = require("./routes/charges.js");
const vouchers = require("./routes/vouchers.js");
const cashbook = require("./routes/cashbook.js");
const ledger = require("./routes/ledger.js");
const app = express();

const port = 3000;

app.use(express.static("static"));
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

app.set("view engine", "html");

nunjucks.configure("templates", {
    autoescape: true,
    express: app,
});

index.init(app);
societies.init(app);
members.init(app);
charges.init(app);
vouchers.init(app);
cashbook.init(app);
ledger.init(app);

app.listen(port, () =>
    console.log(`Example app listening at http://localhost:${port}`)
);