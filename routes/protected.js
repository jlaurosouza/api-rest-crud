var express = require('express');
var router = express.Router();
var model = require('../models/index');
var jwt = require('express-jwt');

var isRevokedCallback = function(req, payload, done){
  var issuer = payload.iss;
  var tokenId = payload.jti;
 
  data.getRevokedToken(issuer, tokenId, function(err, token){
    if (err) { return done(err); }
    return done(null, !!token);
  });
};
 
router.get('/protected',
  jwt({secret: 'shhhhhhared-secret',
    isRevoked: isRevokedCallback}),
  function(req, res) {
    if (!req.user.admin) return res.sendStatus(401);
    res.sendStatus(200);
  });