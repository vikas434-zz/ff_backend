let request = require('request');
request({
    headers:{
        'Content-Type':'application/json',
        'Authorization':'Token token=227e0ff7f92df35ea63c50a763680bbe',
        'Accept':'application/vnd.stattleship.com; version=1'
    },
    uri:'https://api.stattleship.com/football/nfl/games?season_id=nfl-2018-2019&week=17',
    method:'GET',
        },
function (error, response, body){
    let data_obj = JSON.parse(body);
    let json_ret_array = [];
    data_obj['games'].forEach((element,i) => {
        let json_obj = new matchdb();
        json_obj.week = element.interval_number;
        json_obj.hometeam = data_obj['home_teams'][i].hashtag;
        json_obj.awayteam = data_obj['away_teams'][i].hashtag;
        json_obj.venue = (data_obj['venues'][i] != undefined)?data_obj['venues'][i].city:'New York';
        json_obj.timestamp = element.timestamp;
        if(element.home_team_score == 0 && element.away_team_score == 0){
            json_obj.scoreline = 'notplayed';
        } else{
            json_obj.scoreline = element.home_team_score.toString() + '-' + element.away_team_score.toString();
        }
        json_obj.save((err,record)=>{
            if(!err){
                json_ret_array.push(record);
            }
        });
    });
});