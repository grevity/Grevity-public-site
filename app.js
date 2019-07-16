const express = require('express');
const bodyParser = require('body-parser');
const expressLayouts = require('express-ejs-layouts');
const engine = require('ejs-locals');

const app = express();
app.listen(5000);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/assets', express.static('assets'))
app.use('/',require('./routes/paths'));

app.engine('ejs', engine);
app.use(expressLayouts);
app.set('view engine','ejs');