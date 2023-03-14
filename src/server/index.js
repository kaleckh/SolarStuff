const express = require('express')
const cors = require('cors')
const massive = require('massive');
const dotenv = require('dotenv')
require('dotenv').config()
const bodyParser = require('body-parser')
const { CONNECTION_STRING } = process.env;
const {newPackage, getPackage, getUser, newUser} = require('./controller');
const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser());

massive({
    connectionString: CONNECTION_STRING,
    ssl: { rejectUnauthorized: false }
})
    .then((dbInstance) => {
        app.set('db', dbInstance);
    })
    .catch((err) => console.log(err));


app.post('/api/newPackage', newPackage)
app.get('/api/getUser/:email', getUser)
app.post('/api/newUser/:email', newUser)


app.listen(4020, () => console.log('Server running on 4020'))