const express = require("express");
const router = express.Router();
const axios = require("axios");

let nfts = []

router.post("/", async (req, res)=> {
    const newNFT = {
      name: "Purple Cat",
      description: "colorful bright cat"
    };
nfts.push(newNFT);
res.json(nfts);
});

module.exports = router;