const common = require('./common');
const chai = common.chai;
const should = chai.should();
const expect = chai.expect;
const url = common.url;

describe('Login folder validation', () =>{
  it('Should return status 200', done => {
    chai.request(url).get('/login').end(
      (err, req) =>{
        req.should.have.status(200);
        done();
      }
    );
  });
});

describe('Should have login dialogs', () =>{
  it('should be login page', done => {
    chai.request(url).get('/login').end(
      (err, res) =>{
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
        res.text.should.contain('<label for="password">password</label>');
        res.text.should.contain('<input class="form-control" id="password" type="password" name="password" value>');
        done();
      }
    )
  });
  it('should have submit button', done => {
    chai.request(url).get('/login').end(
      (err, res) => {
        res.text.should.contain('<form method="post" action="/login" enctype="application/json">');
        res.text.should.contain('<button class="btn btn-primary btn-lg btn-block" type="submit">Login</button>');
        done();
      }
    )
  });
});

describe('Should be able to login to the database', () =>{
  it('should be able to sent post message', done => {
    chai.request(url).post('/login')
    .set('enctype', 'application/json')
    .send({login: "test@mail.com", password: "password"})
    .end((err, res)=>{
        res.should.have.status(200);
        done();
      });
  });

  it('should be able to send any credentials', done =>{
    chai.request(url).post('/login')
      .set('enctype', 'application/json')
      .send({login: "test@mail.com", password: "password"})
      .end((err, res) =>{
        res.should.have.status(200);
        done();
      });
  });

  it('should be able to connect with correct credentials', done =>{
    chai.request(url).post('/login')
      .set('enctype', 'application/json')
      .send({login: "user@mail.com", password: "password"})
      .end((err, res) =>{
        //console.log(res.req.path);
        expect(res.req.path).to.equal("/home");
        //expect(res.body).to.deep.equal({result: "password correct"});
        done();
      });
  });

  it('should be able to fail with wrong credentials', done =>{
    chai.request(url).post('/login')
      .set('enctype', 'application/json')
      .send({login: "test@mail.com", password: "password"})
      .end((err, res) =>{
        res.text.should.contain('<h4 class="bm-3">Login</h4>');
        res.text.should.contain('<div class="alert alert-warning" role="alert">wrong password</div>');
        done();
      });
  });

});
