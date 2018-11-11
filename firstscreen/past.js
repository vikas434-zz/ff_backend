let request = require('request');
let matchdb = require('../dbschema/matchdb.js');

const fetchPast = async()=>{
    const currenttimestamp = Math.round(new Date().getTime()/1000);
    const matches = await matchdb.find({timestamp : {$lt:currenttimestamp}});
    return matches;
};
module.exports = {
    main : async(req,res)=>{
        const matches = await fetchPast();
        return res.status(201).json(matches);
    }
};