const jwt = require('express-jwt');

const getHeadersToken = (req) =>{
  const {headers: {authorization} } = req;
  if(authorization && authorization.split(' ')[0] === 'Token') {
    return authorization.split(' ')[1];
  };
  return null;
};

const auth = {
  require: jwt({
    secret: 'BW1MlE1tmNVsXrVosIwbRFBIPzvkDE0t',
    userProperty: 'payload',
    getToken: getHeadersToken
  }),
  optional: jwt({
    secret: 'BW1MlE1tmNVsXrVosIwbRFBIPzvkDE0t',
    userProperty: 'payload',
    getToken: getHeadersToken,
    credentialsRequired: false
  })
};

module.exports = auth;
