const express = require('express')
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const routes = require('./router/routes');
const port = process.env.PORT || 4000;
const server = express();
// const path = require('path');

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));
server.use(cors());
server.use(cookieParser());


(async () => {

    try {
        //mongoDB Connection
        await mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/feePaymentDB', {
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

server.use('/feePaymentDB', routes);

// if (process.env.NODE_ENV === 'production') {
//     app.use(express.static( 'client/build' ));

//     app.get('*', (req, res) => {
//         res.sendFile(path.join(__dirname, 'client', 'build', 'index.html')); // relative path
//     });
// }

server.listen(port, () => console.log(`!!!Express Server is Running on port => ${port}`));