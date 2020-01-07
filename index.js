require('dotenv').config();

const twitter = require('twitter');

const config = new twitter({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token_key: process.env.ACCESS_TOKEN_KEY,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET
});

config.get('search/tweets', {q: 'awwwards'}, (error, tweets, response) => {

  if (!error) {

    tweets.statuses.forEach((data) => {

      const tweetID = data.id_str;

      config.post(`statuses/retweet/${tweetID}`, (error, tweet, response) => {

        if (!error) {
          console.info(tweet);
        } else {
          console.error(error);
        }

      });

    });

  } else {
    console.error(error);
  }

});
