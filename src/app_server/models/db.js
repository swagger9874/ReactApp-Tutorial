var express = require('express');

var bodyParser = require('body-parser');

var mongoose = require('mongoose'), Schema = mongoose.Schema;

 

const dashfile = "d:/projects/db/db.json";

const fs = require('fs');

var app = express();

 

const mapMongoUrl = "mongodb://localhost:27017/reactapp";

mongoose.connect(mapMongoUrl, { useNewUrlParser: true });

const conn = mongoose.Connection;

var DashboardSchema = new Schema({

    _id: String,

    name: String,

    description: String,

    favorite: Boolean,

    widgets: [{}]

});

var Dashboard = mongoose.model('Dashboard', DashboardSchema);

 

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

 

app.use(function (req, res, next) {

    res.header('Access-Control-Allow-Origin', '*');

    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

    next();

});

 

app.get('/', function (req, res) {

    res.send('Hello World');

})

 

app.get('/dashboard', function (req, res) {

    console.log('get dashboard');

    try {

        if (fs.existsSync(dashfile))

            res.send(JSON.parse(fs.readFileSync(dashfile)));

        // let query = { _id: "1" };

        // Dashboard.findById("1", (err, doc) => {

        //     if (err) resp.sendStatus(500).send(err);

        //     resp.send(doc);

        // });

    } catch (error) {

        console.log(error);

        res.send({ _id: "1", name: "Searches By Hotel", favorite: false, widgets: [] });

    }

})

 

app.post('/dashboard', function (req, res, next) {

    const data = req.body;

    console.log("req body", data);

    fs.writeFileSync(dashfile, JSON.stringify(req.body));

    res.sendStatus(200);

    // Dashboard.findByIdAndUpdate("1", data, { upsert: true }, (err, doc) => {

    //     if (err) resp.sendStatus(500).send(err);

    //     resp.sendStatus(200);

    // });

})

 

var server = app.listen(8081, function () {

    var host = server.address().address

    var port = server.address().port

 

    console.log("Example app listening at http://%s:%s", host, port)

})
