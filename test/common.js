const sinon = require('sinon');
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const expect = chai.expect;

var options = {
    foo: "foo"
};

exports.chai = chai;
