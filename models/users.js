'use strict';
const jwt = require('jsonwebtoken');

function getJWT(){
  const today = new Date();
  const expDate = new Date(today);
  expDate.setDate( today.getDate() + 60 );

  return jwt.sign({
    email: this.email,
    id: this._id,
    exp: parseInt(expDate.getTime() / 1000, 10)
  }, 'secret');
}

function toAuthJson(){
  return {
    _id: this._id,
    email: this.email,
    token: this.password
  };
};

var data = {
  uid1: {_id: 1, email: "test@mail.com",  password: "1234", toAuthJSON: toAuthJson, generateJWT: getJWT},
  uid2: {_id: 2, email: "dummy@mail.com", password: "4321", toAuthJSON: toAuthJson, generateJWT: getJWT},
};

module.exports = {
  find: (email) => {
    if(data.uid1.email == email){
        console.log('uid1');
        return data.uid1;
    } else if (data.uid2.email == email){
        console.log('uid2');
        return data.uid2;
    } else {
      console.log('null');
      return null;
    }
  },
  generateJWT: () => {
    const today = new Date();
    const expDate = new Date(today);
    expDate.setDate( today.getDate() + 60 );

    return jwt.sign({
      email: this.email,
      id: this._id,
      exp: parseInt(expDate.getTime() / 1000, 10)
    }, 'secret');
  },
  toAuthJSON: () => {
    return {
      _id: this._id,
      email: this.email,
      token: this.password
    };
  }
};
