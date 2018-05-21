var Twitter = require('twitter-node-client').Twitter;
var config = require('../config');

//Callback functions
var error = function (err, response, body) {
    if(err){
    	console.log("Error: " + JSON.stringify(err));
    }
};

var twitter_config = {
    "consumerKey": 'nqo3HpNeTwJsOQ9dxwTqHTEu0',  // config.consumer_key,
    "consumerSecret": '82th6VzpjNrb2k2d7w3s0hmWrER9jkSDFbzdEWmtmKzsHRCxmC', //config.consumer_secret,
    "accessToken":  '998012123933429760-irc1lyri9SwiZ6GFeLMBEavuUqs4imE',//config.access_token,
    "accessTokenSecret": '3siFuELdloiRb6NkqthkWQMcXQLb1WqVTbq6xYvk8WNnx', //config.access_token_secret,
    "callBackUrl": config.callback_url
}

var twitter = new Twitter(twitter_config);

module.exports = {
	getTimeline : function (req, res){
		twitter.getUserTimeline({screen_name : req.body.data, count : 25}, error, function (data){

			console.log(JSON.stringify(data));
			res.json(data);
			//res.status(200).send(data);
		});
	}

	// getTimeline : function (req, res){
	// 	twitter.getUserTimeline(({screen_name : req.body.data, count : 25}, error), (data) => {

	// 		console.log(JSON.stringify(data));
	// 		//res.json(data);
	// 		 res.status(200).send(data);
	// 	}, err => {
	// 		console.log('err', err);
	// 	});
	// }
};