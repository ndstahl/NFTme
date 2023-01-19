const express = require('express');
const app = express();
const port = process.env.PORT || 3001;    

const login = require('./routes/login');
const navbar = require('./routes/navbar');
const shop = require('./routes/shop');


const start = async () => {

    app.use(express.json());
    app.use("/api/login". login);
    app.use("/api/shop", shop);
    app.use("/api/checkout", checkout);



    app.listen(port, () => {
        console.log('📦 Server started on port', port)
    });
};


start();