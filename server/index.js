const express = require('express');
const request = require('request');
const app = express();
const port = 3000;

// placeholder for Strava test
const stravaURL = 'https://www.strava.com/api/v3';
// to update this use https://stackoverflow.com/questions/52880434/problem-with-access-token-in-strava-api-v3-get-all-athlete-activities
let authToken = 'a43105e0e48dd6092f3a0d30e326ec67ee86d364';

app.get('/', (req, res) => res.send('Hello World!'));

// this is not working AND bearer token will expire after 6 hours
app.get('/strava', (req, res) => {
  // let stravaResult;
  request.get({url:'https://www.strava.com/api/v3/athlete/activities', oauth:'Authorization: Bearer a43105e0e48dd6092f3a0d30e326ec67ee86d364'}), (err, response, body) => {
    // stravaResult = response;
    res.send(response)
  }
  // res.send('stravaResult')
}
);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));