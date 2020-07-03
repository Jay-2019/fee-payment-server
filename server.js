const express = require('express')
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const routes = require('./router/routes');
const port = 4000;
const server = express();



server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));
server.use(cors());
server.use(cookieParser());


(async () => {

    try {
        //mongoDB Connection
        await mongoose.connect('mongodb://127.0.0.1:27017/feePaymentDB', {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            serverSelectionTimeoutMS: 5000,
            dbName: 'feePaymentDB'
        });
    } catch (error) {
        console.error(error);
    }
})();

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

// mongoose.connection.on('error', err => {
//     console.error(err);
// });

server.use('/feePaymentDB', routes);
server.listen(port, () => console.log(`!!!Express Server is Running on port => ${port}`));