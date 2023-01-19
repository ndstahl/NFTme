const {Pool} = require("pg");

const db = new Pool({
    host: "localhost",
    database: "nftme",
    port: 5400,
    user: "CGreene1",
    password: "nftme"
});

db.connect()
.then(() =>console.log("🥳Connected to DB!"))
.catch((err) => console.error("😔Failed to connect to DB"));

module.exports = {
    query: (text) =>db.query(text),
};