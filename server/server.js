const express = require('express');
const app = express();
const port = process.env.PORT || 3001;    


const shop = require('./routes/shop');
const login = require('./routes/login');
const nfts = require('./routes/nfts');
const checkout = require('./routes/checkout');


const start = async () => {

    app.use(express.json());
    app.use("/api/login", login);
    app.use("/api/shop", shop);
    app.use("/api/checkout", checkout);
    app.use("/api/nfts", nfts);

    app.listen(port, () => {
        console.log('📦 Server started on port', port)
    });
};


start();