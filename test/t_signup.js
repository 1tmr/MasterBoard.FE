const common = require('./common');
const chai = common.chai;
const should = chai.should();
const expect = chai.expect;
const url = common.url;

describe('Sign up UI validation', () =>{
  it('Should return status 200', done => {
    chai.request(url).get('/signup').end(
      (err, req) =>{
        req.should.have.status(200);
        done();
      }
    );
  });
});

describe('Should have signup dialogs', () =>{
  it('should be at sign up page', done => {
    chai.request(url).get('/signup').end(
      (err, res) =>{
        res.text.should.contain('<h4 class="bm-3">Sign Up</h4>');
        done();
      }
    );
  });

  it('should have email field', done => {
    chai.request(url).get('/signup').end(
      (err, res) => {
        res.text.should.contain('<label for="email">e-mail</label>');
        res.text.should.contain('<input class="form-control" id="email" type="email" name="email" value>');
        done();
      }
    )
  });
  it('should have password field', done => {
    chai.request(url).get('/signup').end(
      (err, res) => {
        res.text.should.contain('<label for="password">password</label>');
        res.text.should.contain('<input class="form-control" id="password" type="password" name="password" value>');
        done();
      }
    )
  });
  it('should have repeat password field', done => {
    chai.request(url).get('/signup').end(
      (err, res) => {
        res.text.should.contain('<label for="password_rep">password repeat</label>');
        res.text.should.contain('<input class="form-control" id="password_rep" type="password" name="password_rep" value>');
        done();
      }
    )
  });    it('should have submit button', done => {
    chai.request(url).get('/signup').end(
      (err, res) => {
        res.text.should.contain('<form method="post" action="/signup" enctype="application/json">');
        res.text.should.contain('<button class="btn btn-primary btn-lg btn-block" type="submit">Sign Up</button>');
        done();
      }
    )
  });
});
