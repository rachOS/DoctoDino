const express = require("express");
const path = require('path');
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const dotenv = require("dotenv").config();

const port = process.env.NODE_ENV_PORT || 8080;
const api = require("./routes");

app.use(cors());
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);
app.use(morgan("dev"));

app.use("/api", api);

// server
app.use(express.static(path.join(__dirname, "build")));
app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "build", 'index.html'));
});
app.listen(port, (err) => {
    if (err) {
        throw new Error("Something bad happened...");
    }
    console.log(`Server is listening on ${port}`);
});
