const common = require('../common');
const chai = common.chai;
const should = chai.should();
const expect = chai.expect;
const authUser = common.authUser;
const stopapp = common.stopapp;
const url = common.url;

describe('2.1.1. that is able to', () => {
  let authenticatedUser;
  before(done =>{
    authenticatedUser = authUser(done);
  });

  it("show up with 200 status", (done) =>{
    authenticatedUser
        .get('/home')
        .end((err, res) => {
            expect('Location', '/home');
            res.should.have.status(200);
            done();
          }
        );
  });

  it("show a welcome news", (done) =>{
    authenticatedUser
        .get('/home')
        .end((err, res) => {
          expect('Location', '/home');
          res.text.should.contain('<li class="nav-item active"><a class="nav-link" href="/home">News</a></li>');
          res.text.should.contain('<li class="nav-item"><a class="nav-link" href="/calendar">Game Calendar</a></li>');
          res.text.should.contain('<li class="nav-item"><a class="nav-link" href="/game">My Games</a></li>');
          res.text.should.contain('<li class="nav-item"><a class="nav-link" href="/profile">Profile</a></li>');
          res.text.should.contain('<div class="row-fluid"><h1> Welcome to Master Board</h1></div>');
          done();
        }
      );
  });
  after((done) => {stopapp(done);});
});
