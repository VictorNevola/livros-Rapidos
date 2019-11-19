const express = require(`express`);
const app = express();
const hbs = require(`hbs`);
const viewsPath = __dirname + '/views';
const {router} = require(`./routes`);
const bodyParser = require('body-parser');
const {mongoConnect} = require(`./resources/mongo`);

mongoConnect();
app.use(express.static(`${__dirname}/public`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.engine('hbs', hbs.__express);
app.set('view engine', 'hbs');
app.set('views', viewsPath);
app.use(router);

module.exports = {
    app,
  };