// set up ======================================================================
const express = require('express');
const  app = express(); 						// create our app w/ express
const  morgan = require('morgan');
const  bodyParser = require('body-parser');
const  methodOverride = require('method-override');
const  routes = require('./api/routes');
//const port = process.env.PORT;
// Configuration ===============================================================
app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public')); 		
app.use(morgan('dev')); // log every request to the console
app.use(bodyParser.urlencoded({'extended': 'true'})); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request
app.use(function (req, res, next){ //configure for cross origin headers
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "*");
    next();
});

// Set-up Routing ======================================================================
app.use('/', routes);

// Listen to port 5000 (start app with node server.js) ======================================

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
