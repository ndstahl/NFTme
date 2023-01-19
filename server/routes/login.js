const express = require("express");
const router = express.Router();
const axios = require("axios");

let logins = []

router.post("/", async (req, res)=> {
    const login = {
        Username: "Jas313",
        Password: "hello!1234",
    };
logins.push(login);
res.json(logins.data);
});

module.exports = router;