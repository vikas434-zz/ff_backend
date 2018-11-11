let express = require('express');
let config = require('./server/config.js');
let request = require('request');
let matchdb = require('./dbschema/matchdb.js');

let app=express();
app=config(app);
app.set('port',process.env.PORT || 3500);
app.listen(app.get('port'), function() {
console.log('Server up and Running');
});
