const express= require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'dashboard.html'));
// });

//Set static folder
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