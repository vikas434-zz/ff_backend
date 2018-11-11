let mongoose = require('mongoose');

let dbSchema = mongoose.Schema({
week:{type:String,required:true},
hometeam:{type:String,required:true},
awayteam:{type:String,required:true},
venue:{type:String,required:true},
timestamp:{type:Number,required:true},
scoreline:{type:String},
year:{type:Number,required:true},
seasontype:{type:String,required:true}
});

module.exports = mongoose.model('matchdb',dbSchema);