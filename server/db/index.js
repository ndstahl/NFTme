const { Pool } = require("pg");

const db = new Pool({
  host: "localhost",
  database: "nftme",
  port: 5400,
  user: "admin",
  password: "nftme",
});

db.connect()
  .then(() => console.log("🥳Connected to DB!"))
  .catch((err) => console.error("😔Failed to connect to DB"));

const getNfts = (request, response) => {
  db.query("SELECT * FROM nfts_me ORDER BY id ASC", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const getNftsById = (request, response) => {
  const id = parseInt(request.params.id);

  db.query("SELECT * FROM nfts_me WHERE id = $1", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const getUsers = (request, response) => {
  db.query("SELECT * FROM users_me ORDER BY id ASC", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

module.exports = {
  query: (text) => db.query(text),
  getNfts,
  getNftsById,
  getUsers,
};
const getUser = (request, response) => {
  const username = request.body.userName;

  db.query(
    `SELECT username, userpassword FROM users_me WHERE username = ${userName}`,
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

module.exports = {
  query: (text) => db.query(text),
  getNfts,
  getNftsById,
  getUser,
};
