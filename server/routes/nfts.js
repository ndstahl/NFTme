const express = require("express");
const router = express.Router();
const axios = require("axios");
const { query } = require("../db");


router.get("/", async (req, res)=> {
const data = await query('SELECT * FROM nfts_me ORDER BY id ASC')
console.log('DATAAAA', data.rows);
res.json({
    data: data.rows
});
});

module.exports = router;