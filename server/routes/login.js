const express = require("express");
const router = express.Router();
const axios = require("axios");
const { query , getUsersById } = require("../db");

router.get("/", async (req, res) => {
  const data = await getUser(req, res);
//   console.log("DATAAAA", data.rows);
  res.json({
    data: data.rows,
  });
});


router.post("/", async (req, res) => {
    console.log('call made here')
    const {username} = req.body;
    console.log('Username', username)
    const data = await query(`SELECT * FROM users_me WHERE username = '${username}'`)
    console.log("DATAAAA", data.rows);
    res.json({
      data: data.rows,
    });
});

module.exports = router;
