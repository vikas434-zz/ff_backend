let request = require('request');

module.exports = {
    main : (req,res)=>{
        request({
            headers:{
                'Content-Type':'application/json',
                'Authorization':'Token token=227e0ff7f92df35ea63c50a763680bbe',
                'Accept':'application/vnd.stattleship.com; version=1'
            },
            uri:'https://api.stattleship.com/football/nfl/games?season_id=nfl-2018-2019&status=in_progress',
            method:'GET',
                },
        function (error, response, body){
            res.json(JSON.parse(body));
        });
    }
};