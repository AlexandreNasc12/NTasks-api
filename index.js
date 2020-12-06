var express = require('express');
var consign = require('consign');

const PORT = 3000;

const app = express();

consign()
    .include('models')
    .then('routers')
    .into(app);

app.listen(PORT, () => console.log(`NTask API - porta ${PORT}`));
