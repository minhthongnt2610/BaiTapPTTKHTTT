const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Backend NodeJS chạy OK");
});

app.listen(3000);