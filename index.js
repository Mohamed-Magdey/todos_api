var express    = require('express'),
    app        = express(),
    bodyParser = require('body-parser');
const port = process.env.PORT || 3000;

var todoRoutes = require('./routes/todos');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));

app.get('/', function (req, res) {
    res.sendFile("index.html");
})

app.use('/api/todos', todoRoutes);

app.listen(port, function () {
    console.log("Listening on: http://127.0.0.1:" + port);
})