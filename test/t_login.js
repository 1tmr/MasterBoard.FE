const common = require('./common');
const chai = common.chai;
const should = chai.should();
const expect = chai.expect;
const url = common.url;

describe('1.2.1. Login folder validation', () =>{
  it('Should return status 200', done => {
    chai.request(url).get('/login').end(
      (err, req) =>{
        expect('Location', '/login');
        req.should.have.status(200);
        done();
      }
    );
  });
});

describe('1.2.2. Should have login dialogs', () =>{
  it('should be login page', done => {
    chai.request(url).get('/login').end(
      (err, res) =>{
        expect('Location', '/login');
        res.text.should.contain('<h4 class="bm-3">Login</h4>');
        done();
      }
    );
  });

  it('should have login field', done => {
    chai.request(url).get('/login').end(
      (err, res) => {
        res.text.should.contain('<label for="login">login</label>');
        res.text.should.contain('<input class="form-control" id="login" type="text" name="login" value>');
        done();
      }
    )
  });
  it('should have password field', done => {
    chai.request(url).get('/login').end(
      (err, res) => {
        expect('Location', '/login');
        res.text.should.contain('<label for="password">password</label>');
        res.text.should.contain('<input class="form-control" id="password" type="password" name="password" value>');
        done();
      }
    )
  });
  it('should have submit button', done => {
    chai.request(url).get('/login').end(
      (err, res) => {
        expect('Location', '/login');
        res.text.should.contain('<form method="post" action="/login" enctype="application/json">');
        res.text.should.contain('<button class="btn btn-primary btn-lg btn-block" type="submit">Login</button>');
        done();
      }
    )
  });
});

describe('1.2.3. Should be able to login to the system', () =>{
  it('should be able to sent post message', done => {
    chai.request(url).post('/login')
    .set('enctype', 'application/json')
    .send({login: "test@mail.com", password: "pass"})
    .end((err, res)=>{
      expect('Location', '/login');
        res.should.have.status(400);
        done();
      });
  });

  it('should be able to send any credentials', done =>{
    chai.request(url).post('/login')
      .set('enctype', 'application/json')
      .send({login: "test@mail.com", password: "password"})
      .end((err, res) =>{
        expect('Location', '/login');
        res.should.have.status(400);
        done();
      });
  });

  it('should be able to connect with correct credentials', done =>{
    chai.request(url)
      .post('/login')
      .set('enctype', 'application/json')
      .send({login: "test@mail.com", password: "1234"})
      .end((err, res) =>{
        expect('Location', '/home');
        res.text.should.contain('<title>Master Board</title>');
        res.text.should.contain('<h5 class="card-title"> Welcome to Master Board</h5>');
        done();
      });
  });

  it('should be able to fail with wrong credentials', done =>{
    chai.request(url).post('/login')
      .set('enctype', 'application/json')
      .send({login: "test@mail.com", password: "password"})
      .end((err, res) =>{
        expect('Location', '/login');
        res.text.should.contain('<h4 class="bm-3">Login</h4>');
        res.text.should.contain('<div class="alert alert-warning" role="alert">incorrect username and password</div>');
        done();
      });
  });

  it('should return a 302 response and redirect to index page', done => {
    chai.request(url).get('/home')
    .end((err, res) => {
      expect('Location', '/');
      done();
    });
  });
});
