const common = require('../../common');
const chai = common.chai;
const should = chai.should();
const expect = chai.expect;
const url = common.url;
const path = '/game/2'


describe('4.1.1. where UI: ['+path+']', () => {
  it("shows up with status 200", done =>{
    chai.request(url).get(path).end(
      (err, res) =>{
        res.should.have.status(200);
        done();
      }
    );
  });

  it("provides news feed", done => {
    chai.request(url).get(path).end(
      (err, res) =>{
        //res.should.have.status(200);
        done();
      }
    );
  });

  it("provides profile feed", done => {
    chai.request(url).get(path).end(
      (err, res) => {
        // has user profile tab
        done();
      }
    );
  });

  it("provides contact tab", done => {
    chai.request(url).get(path).end(
      (err, res) => {
        // has user contacts tab
        done();
      }
    );
  });

  it("provides messages tab", done => {
    chai.request(url).get(path).end(
      (err, res) => {
        // has messages tab
        done();
      }
    );
  });
});

describe('4.1.2. where news feed: ['+path+'/news]', () => {
  it("shows up with status 200", done => {
    chai.request(url).get(path+'/news').end(
      (err, res) => {
        res.should.have.status(200);
        done();
      }
    );
  });

  it("show news", done => {
    chai.request(url).get(path+'/news').end(
      (err, res) =>{
        // validate news messages
        done();
      }
    );
  });
});

describe('4.1.3. where profile tab: ['+path+'/profile/123]', () =>{
  it("shows up with status 200", done => {
    chai.request(url).get(path+'/news').end(
      (err, res) => {
        res.should.have.status(200);
        done();
      }
    );
  });

  it("shows my details", done => {
    chai.request(url).get(path+'/profile/123').end(
      (err, res) => {
        // review user's profile
        done();
      }
    );
  });
  it("allows me to change my details", done => {
    chai.request(url).get(path+'/profile/123').end(
      (err, res) => {
        // review user's profile
        done();
      }
    );
  });
  it("gives me UI with my details", done => {
    chai.request(url).get(path+'/profile/123').end(
      (err, res) => {
        // review user's profile
        done();
      }
    );
  });

});
