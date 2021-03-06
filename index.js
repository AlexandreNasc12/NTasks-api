var express = require('express');
var consign = require('consign');

const app = express();

consign()
    .include('db.js')
    .then('models')
    .then('libs/middlewares.js')
    .then('routers')
    .then('libs/boot.js')
    .into(app);
