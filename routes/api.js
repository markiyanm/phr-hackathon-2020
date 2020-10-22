const express = require('express');
const router = express.Router();
const Lead = require('../models/Lead');
const Campaign = require('../models/Campaign');
const { Mongoose } = require('mongoose');

router.get('/', (req, res) => {
    res.send('api hit');
});

router.post('/lead', (req, res) => {

    console.log(req.body);

    const lead = new Lead({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        age: req.body.age,
        gender: req.body.gender,
        smoker: req.body.smoker,
        pregnant: req.body.pregnant
    });

    lead.save()
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json({ message: err });
        });
});

router.post('/campaign', (req, res) => {
    console.log(req.body);
    const campaign = new Campaign({
        name: req.body.name,
        budget: req.body.budget,
        target: req.body.target,
        insured: req.body.insured,
        gender: req.body.gender,
        smoker: req.body.smoker,
        pregnant: req.body.pregnant
    });

    campaign.save()
        .then(data => {
            console.log('then');
            res.json(data);
        })
        .catch(err => {
            console.log('catch');
            res.json({ message: err });
        });

    sendCampaignToPhreesia();
});

router.get('/campaigns', (req, res) => {
    const CampaignModel = Campaign.model("Campaigns");
    CampaignModel.find((err, docs) => {
        if(!err){
            res.send(docs);
        }
        else
            res.send(err);
    });
});

router.get('/leads', (req, res) => {
    const LeadModel = Lead.model("Leads");
    LeadModel.find((err, docs) => {
        if(!err){
            res.send(docs);
        }
        else
            res.send(err);
    });
});

router.post('/new-campaign', (req, res) => {
    console.log('got the request');
    console.log('sent response');
    res.send("sent");
    var result = sendCampaignToPhreesia();
    // res.json(result);
});

function sendCampaignToPhreesia(){
    console.log('posting to Phreesia.....');

    var apiKey = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJNYXJraXlhbidzIFNlcnZpY2UiLCJpYXQiOjE2MDMyMjEzMDIsImV4cCI6MTYzNDc1NzMwNSwiYXVkIjoiSGFtbWFkJ3MgU2VydmljZSIsInN1YiI6IkNvbW11bmljYXRpb24gVG9rZW4ifQ.Qvm593-Gpge7kEchF9cj7B_xaa-as4z5wB9k7kePq8E';
    const request = require('request')

    request.post(
      'https://testnj.phreesia.net/sponsored/hackathon/api/campaign',
      {
        json: {
          key: apiKey,
        },
      },
      (error, res, body) => {
        if (error) {
          console.error(error)
          return error
        }
        console.log(`statusCode: ${res.statusCode}`)
        console.log(body)
        return body;
      }
    )
    
}

module.exports = router;