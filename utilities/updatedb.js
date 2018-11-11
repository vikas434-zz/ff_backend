let matchdb = require('./dbschema/matchdb.js');
matchdb.find({})
.exec((err, docs) => {
    if (err || docs == undefined || docs.length == 0)
        ;
    else {
        docs.forEach((doc) => {
             matchdb.findOneAndUpdate({_id: doc._id},{$set: {year: 2018,seasontype:'Regular'}})
             .exec();
        });
   }
});