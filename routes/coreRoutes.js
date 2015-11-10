var React = require('react/addons');
var inflator = require('../app/stores/Inflator');

var monk = require('monk'),
    mongodb = require('mongodb');

var Home = React.createFactory(require('../app/components/home/App.jsx').App);

module.exports = function(server){
    server.get('/', function(request, response){

        var MongoClient = mongodb.MongoClient;
        var url = 'MagicWord';

        MongoClient.connect(url, function(err, db) {
            if (err) {
                response.send("this is the error: " + err)
            } else {
                db.collection('games').find().toArray(function (err, results) {
                    var data = {games: results};
                    inflator.inflate(data);
                    response.render('index.ejs', {home: React.renderToString(Home({})), data: data});

                    db.close();
                });
            }
        });
    });

    server.post('/updateRating', function(request, response) {
        console.log(request);
    });
};