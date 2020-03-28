const common = require('../../common');
const chai = common.chai;
const should = chai.should();
const expect = chai.expect;
const authUser = common.authUser;
const stopapp = common.stopapp;
const url = common.url;
const path = '/game/2'


describe('4.1.1. where UI: ['+path+']', () => {
  let authenticatedUser;
  before(done =>{
    authenticatedUser = authUser(done);
  });

  it("shows up with status 200", done =>{
    authenticatedUser
    .get(path)
    .end(
      (err, res) =>{
        res.should.have.status(200);
        done();
      }
    );
  });

  it("provides news feed", done => {
    authenticatedUser
    .get(path)
    .end(
      (err, res) =>{
        //res.should.have.status(200);
        done();
      }
    );
  });

  it("provides profile feed", done => {
    authenticatedUser
    .get(path)
    .end(
      (err, res) => {
        // has user profile tab
        done();
      }
    );
  });

  it("provides contact tab", done => {
    authenticatedUser
    .get(path)
    .end(
      (err, res) => {
        // has user contacts tab
        done();
      }
    );
  });

  it("provides messages tab", done => {
    authenticatedUser
    .get(path)
    .end(
      (err, res) => {
        // has messages tab
        done();
      }
    );
  });
  after((done) => {stopapp(done);});
});

describe('4.1.2. where news feed: ['+path+'/news]', () => {
  let authenticatedUser;
  before(done =>{
    authenticatedUser = authUser(done);
  });

  it("shows up with status 200", done => {
    authenticatedUser
    .get(path+'/news')
    .end(
      (err, res) => {
        res.should.have.status(200);
        done();
      }
    );
  });

  it("show news", done => {
    authenticatedUser
    .get(path+'/news')
    .end(
      (err, res) =>{
        // validate news messages
        done();
      }
    );
  });
  after((done) => {stopapp(done);});
});

describe('4.1.3. where profile tab: ['+path+'/profile/123]', () =>{
  let authenticatedUser;
  before(done =>{
    authenticatedUser = authUser(done);
  });

  it("shows up with status 200", done => {
    authenticatedUser
    .get(path+'/news')
    .end(
      (err, res) => {
        res.should.have.status(200);
        done();
      }
    );
  });

  it("shows my details", done => {
    authenticatedUser
    .get(path+'/profile/123')
    .end(
      (err, res) => {
        // review user's profile
        done();
      }
    );
  });
  it("allows me to change my details", done => {
    authenticatedUser
    .get(path+'/profile/123')
    .end(
      (err, res) => {
        // review user's profile
        done();
      }
    );
  });
  it("gives me UI with my details", done => {
    authenticatedUser
    .get(path+'/profile/123')
    .end(
      (err, res) => {
        // review user's profile
        done();
      }
    );
  });
  after((done) => {stopapp(done);});
});
