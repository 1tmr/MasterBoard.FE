const common = require('./common');
const chai = common.chai;
//const app = common.app;
const should = chai.should();
const expect = chai.expect;

describe('Login folder validation', () =>{
  it('Should return status 200', done => {
    chai.request("http://localhost:80").get('/login').end(
      (err, req) =>{
        req.should.have.status(200);
        done();
      }
    );
  });

  describe('Should have login dialogs', () =>{
    it('should be login page', done => {
      chai.request("http://localhost").get('/login').end(
        (err, res) =>{
          res.text.should.contain('<h4 class="bm-3">Login</h4>');
          done();
        }
      );
    });

    it('should have login field', done => {
      chai.request("http://localhost").get('/login').end(
        (err, res) => {
          res.text.should.contain('<label for="login">login</label>');
          res.text.should.contain('<input class="form-control" id="login" type="text" name="login" value>');
          done();
        }
      )
    });
    it('should have password field', done => {
      chai.request("http://localhost").get('/login').end(
        (err, res) => {
          res.text.should.contain('<label for="password">password</label>');
          res.text.should.contain('<input class="form-control" id="password" type="password" name="password" value>');
          done();
        }
      )
    });
    it('should have submit button', done => {
      chai.request("http://localhost").get('/login').end(
        (err, res) => {
          res.text.should.contain('<form method="post" action="/login" enctype="application/json">');
          res.text.should.contain('<button class="btn btn-primary btn-lg btn-block" type="submit">Login</button>');
          done();
        }
      )
    });
  });
});
