var jwt = require('jwt-simple'),
moment = require('moment');


console.log('jwt test');


var payload = {
  "iss": "testJWT",
  "sub": "100254",
  "exp": "2115-11-16T20:08:29.484Z"
};

var secret = 'd1266544-f306-4692-9ab2-e331219d0835';  //currently prod

var token = jwt.encode(payload, secret);

console.log(token);

console.log(payload);
