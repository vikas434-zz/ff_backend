let request = require('request');
let matchdb = require('../dbschema/matchdb.js');

const fetchUpcoming = async()=>{
    const currenttimestamp = Math.round(new Date().getTime()/1000);
    const matches = await matchdb.find({timestamp : {$gt:currenttimestamp}});
    return matches;
};
module.exports = {
    main : async(req,res)=>{
        const matches = await fetchUpcoming();
        res.status(201).json(matches);
    }
};