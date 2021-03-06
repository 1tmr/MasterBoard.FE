const common = require('../../common');
const chai = common.chai;
const should = chai.should();
const expect = chai.expect;
const authUser = common.authUser;
const stopapp = common.stopapp;
const url = common.url;
const path = '/admin/create';

describe('2.4.1. where he can', () => {
  let authenticatedUser;
  before(done =>{
    authenticatedUser = authUser(done);
  });

  it("show up with 200 status", (done) =>{
    authenticatedUser
    .get(path)
    .end(
      (err, res) => {
        res.should.have.status(200);
        done();
      }
    );
  });
  it("see that he creates a game", done => {
    authenticatedUser
    .get(path)
    .end(
      (err, res) => {
        res.text.should.contain('<h4 class="bm-3">Create your Game</h4>');
        done();
      }
    );
  });
  it("see mandatory fields", (done) =>{
    authenticatedUser
    .get(path)
    .end(
      (err, res) => {
        res.text.should.contain('<label for="name">Name*</label>');
        res.text.should.contain('<input class="form-control" id="name" type="text" name="name" placeholder="Game\'s name (mandatory)" value required>');
        res.text.should.contain('<label for="startdate">Start date*</label>');
        res.text.should.contain('<input class="form-control" id="startdate" type="date" name="startdate" value required>');
        done();
      }
    );
  });
  it("see optional fields", (done) =>{
    authenticatedUser
    .get(path)
    .end(
      (err, res) => {
        res.text.should.contain('<label for="descr">Description</label>');
        res.text.should.contain('<textarea class="form-control" id="descr" type="text" name="descr" placeholder="Your game\'s descriptoin (optional)" value>');
        res.text.should.contain('<label for="dur">Duration</label>');
        res.text.should.contain('<input class="form-control" id="dur" type="number" name="dur" value="1">');
        res.text.should.contain('<label for="region">Region</label>');
        res.text.should.contain('<input class="form-control" id="region" type="text" name="region" value>');
        done();
      }
    );
  });
  it("create a game", (done) =>{
    authenticatedUser
    .get(path)
    .end(
      (err, res) => {
          res.text.should.contain('<form method="post" action="/admin/create" enctype="application/json">');
          res.text.should.contain('<button class="btn btn-primary btn-lg btn-block" type="submit">Create</button>');
          done();
      }
    );
  });

  after((done) => {stopapp(done);});
});
