const express= require('express');
const path = require('path');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

//Import Routes
const apiRoutes = require('./routes/api');

app.use(bodyParser.json());
app.use('/api', apiRoutes);

const PORT = process.env.PORT || 5000;



//Connect to DB  //user: hackathon2020 pw:Welcome1
mongoose.connect(process.env.DB_CONNECTION, () =>
    console.log('connected to DB')
); 


app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

app.use(express.static(path.join(__dirname, 'public')));






const leads = [
    {
        id: 1,
        name: 'Thomas Brady',
        email: 'sixrings@demo.com',
        phone: '617-617-1234'
    },
    {
        id: 2,
        name: 'Dana Barros',
        email: 'downtown@demo.com',
        phone: '617-617-1234'
    },
    {
        id: 3,
        name: 'Izzy Alcantara',
        email: 'catcherhater@demo.com',
        phone: '911-911-4232'
    }
]