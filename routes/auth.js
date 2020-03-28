const jwt = require('express-jwt');

const getHeadersToken = (req) =>{
  const {headers: {authorization} } = req;
  //console.log(req.headers);

  if(authorization && authorization.split(' ')[0] === 'Token') {
    //console.log(authorization);
    return authorization.split(' ')[1];
  };

  return null;
};

const auth = {
  require: jwt({
    secret: 'secret',
    userProperty: 'payload',
    getToken: getHeadersToken
  }),
  optional: jwt({
    secret: 'secret',
    userProperty: 'payload',
    getToken: getHeadersToken,
    credentialsRequired: false
  })
};

module.exports = auth;
