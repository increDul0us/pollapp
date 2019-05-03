const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Pusher = require('pusher');

var pusher = new Pusher({
  appId: '774670',
  key: '825ffdc0dd4bca22d9ab',
  secret: '70d9bb488457f4c7e029',
  cluster: 'mt1',
  encrypted: true
});

router.get('/', (req, res) => {
    res,send('Vote')
});


router.post('/', (req, res) => {
    pusher.trigger('os-poll', 'os-vote', {
      points: 1,
      os: req.body.os
    });
    return res.json({ success: true, message: 'Thank you for voting' });  
});


module.exports = router;