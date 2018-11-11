let express=require('express');
let router=express.Router();
let live = require('../firstscreen/live.js');
let past = require('../firstscreen/past.js');
let upcoming = require('../firstscreen/upcoming.js');


module.exports = (app)=>{
router.get('/getUpcomingMatches',upcoming.main);
router.get('/getLiveMatches',live.main);
router.get('/getPastMatches',past.main);
app.use(router);
};