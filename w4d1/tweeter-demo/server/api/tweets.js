"use strict";

const userHelper = require("../lib/user-helper")
const express = require('express');
const tweets  = express.Router();
const moment = require('moment');

module.exports = function(DataHelpers) {

  tweets.get("/", function(req, res) {
    DataHelpers.getTweets((err, tweets) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.json(tweets);
      }
    });
  });

  tweets.post("/", function(req, res) {
    if (!req.body.text) {
      res.status(400).json({ error: 'invalid request: no data in POST body'});
      return;
    }

    const user = req.body.user ? req.body.user : userHelper.generateRandomUser();
    const date = Date.now()
    const tweet = {
      user: user,
      content: {
        text: req.body.text
      },
      created_at: date
    };

    DataHelpers.saveTweet(tweet, (err) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.status(201).send();
      }
    });
  });

  return tweets;

}