var express = require('express'),
    path = require('path'),
    favicon = require('serve-favicon');

var app = express();

require('node-jsx').install();

var port = 8008;
var bodyParser = require('body-parser');

app.use(favicon(__dirname + '/app/favicon.ico'));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended : true
}));

app.use(express.static(path.join(__dirname,'public')));

app.set('views', path.join(__dirname, 'app/views'));
app.set('view engine', 'ejs');

require('./routes/CoreRoutes.js')(app);

app.get('*', function(request, response) {
    request.json({
        'route' : 'Sorry this page does not exist!'
    });
});

app.listen(port);

console.log('Server is online at port: ' + port);