const request = require('request');

const forecast = (latitude, longitude, callback) => {
  const url = 'http://api.weatherapi.com/v1/current.json?key=fccc44fea9c54f3b807111752210907&q=' + latitude + ',' + longitude;
  
  request({ url, json:true }, (error, { body }) => {
    if(error) {
      callback('Unable to connect to weather service!', undefined);
    }
    else if(body.error) {
      callback('Unable able to find location', undefined);
    }
    else {
      callback(undefined, body.current.condition.text + '. It is currently ' + body.current.temp_c + ' degrees out. It feels like ' + body.current.feelslike_c + ' degrees out.'); 
    }
  })         
}

module.exports = forecast;
