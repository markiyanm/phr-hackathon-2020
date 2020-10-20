const express = require('express');
const router = express.Router();
const Lead = require('../models/Lead');

router.get('/', (req, res) => {
    res.send('api hit');
});

router.post('/', (req, res) => {
    const lead = new Lead({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        age: req.body.age,
        gender: req.body.gender,
        smoker: req.body.smoker,
        pregnant: req.body.pregnant
    });
    
    console.log(lead);

    res.json(lead);

    // lead.save()
    //     .then(data => {
    //         console.log('in the then clause');
    //         res.json(data);
    //     })
    //     .catch(err => {
    //         console.log('in the error clause');
    //         res.json({ message: err });
    //     });
});

module.exports = router;