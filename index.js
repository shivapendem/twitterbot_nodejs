const Twit = require(‘twit’); 
const twitter = new Twit({ 
     consumer_key: process.env.APPLICATION_CONSUMER_KEY_HERE,
     consumer_secret: process.env.APPLICATION_CONSUMER_SECRET_HERE,
     access_token: process.env.ACCESS_TOKEN_HERE, 
     access_token_secret: process.env.ACCESS_TOKEN_SECRET_HERE
});

//Search Bot
twitter.get('search/tweets', { q: 'Node.js since:2011-07-19', count: 100 }, function(err, data, response) {
    console.log(data)
})

//List followers
twitter.get('followers/ids', { screen_name: 'twitteraccount' },function (err, data, response) {
     console.log(data)
})
//Retweet Bot
twitter.post('statuses/retweet/:id', { id: '12345678901234567890' },function (err, data, response) {
     console.log(data);
})
//Destroy a tweet
twitter.post('statuses/destroy/:id', { id: '12345678901234567890' }, function (err, data, response) {
     console.log(data)
})