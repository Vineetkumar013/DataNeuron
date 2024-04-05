const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const ConnectDB = require("./DB/ConnectDB");
require("dotenv").config();

ConnectDB();

const port = process.env.PORT || 5000; // Use environment variable for port

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use("/api/v1", require("./Router/dataRouter"));

app.get("/", (req, res) => {
    res.send("Hello World!");
})


// Start the server
app.listen(port, () => console.log(`Server listening on port ${port}`));
