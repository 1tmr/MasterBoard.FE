const request = require('supertest');
const sinon = require('sinon');
const chai = require('chai');
const chaiHttp = require('chai-http');
const users = require('../models/users');
chai.use(chaiHttp);
const expect = chai.expect;
const url = 'http://localhost:81';
var app;

const testuser =  {
  login: 'test@mail.com',
  password: '1234'
};

var options = {
    foo: "foo"
};

function authUser(done){
  app = require('../test_app')();
  var user = request.agent(app);
  user
    .post('/login')
    .set('enctype', 'application/json')
    .send(testuser)
    .end((err, res) =>{
      return done();
    });
  return user;
};

function stopapp(done){
  app.close(done);
};

module.exports.chai = chai;
module.exports.url = url;
module.exports.testuser = testuser;
module.exports.authUser = authUser;
module.exports.app = app;
module.exports.stopapp = stopapp;
