let express = require('express');
let bodyParser = require('body-parser');
let routes = require('./router.js');
let mongoose = require('mongoose');
let keyfile = require('../keyfile.js');

mongoose.connect(keyfile.index());
mongoose.connection.on('open', function() { console.log('Mongoose connected.'); });

module.exports = (app)=>{
    app.use(bodyParser.urlencoded({
        'extended': true
    }));
    app.use(bodyParser.json());
    routes(app);
    return app;
};