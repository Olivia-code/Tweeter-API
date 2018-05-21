const  express = require('express');
const  router = express.Router();

//Route Configuration
router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

router.get('/', function (req, res){
	res.sendFile(__dirname + '/public/index.html');
});

//Controllers
const  twitterController = require('./twitterController');

router.post('/tweets', twitterController.getTimeline);

module.exports = router;