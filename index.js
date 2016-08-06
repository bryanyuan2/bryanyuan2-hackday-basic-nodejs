/*
    hackday-basic-nodejs for hackday usage
*/
var express = require('express');
var search = require('./routes/search');
var app = express();
var bodyParser = require('body-parser');
var router = express.Router();
var helmet = require('helmet');
var cors = require('cors');
var port = 8080;
var whitelist = [
    'http://localhost:3000'
];
var corsOptions = {
    origin: function(origin, callback){
        var originIsWhitelisted = whitelist.indexOf(origin) !== -1;
        callback(null, originIsWhitelisted);
    },
    credentials: true
};

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(helmet());

/*
    public resource
    http://localhost:8080/images/yahoo.png
*/
app.use(express.static('public'));

/* root */
router.get('/', function(req, res) {
    res.json({ message: 'bryanyuan2 hackday api' });
});

/* search api */
router.get('/search/query/:id', search.getResult);

app.use(cors(corsOptions));
app.use('/api', router);
app.listen(port);
console.log('port ' + port);