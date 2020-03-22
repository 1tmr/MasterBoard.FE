const common = require('../common');
const chai = common.chai;
const should = chai.should();
const expect = chai.expect;
const url = common.url;
const path = '/calendar'


describe('that is able to', () => {
  it("show up with 200 status", (done) =>{
    chai.request(url).get(path).end(
      (err, res) => {
        res.should.have.status(200);
        done();
      }
    );
  });
  it("show closest events", (done) =>{
    chai.request(url).get(path).end(
      (err, res) => {
        res.text.should.contain('<li class="nav-item"><a class="nav-link" href="/home">News</a></li>');
        res.text.should.contain('<li class="nav-item active"><a class="nav-link" href="/calendar">Game Calendar</a></li>');
        res.text.should.contain('<li class="nav-item"><a class="nav-link" href="/game">My Games</a></li>');
        res.text.should.contain('<li class="nav-item"><a class="nav-link" href="/profile">Profile</a></li>');
        res.text.should.contain('<div class="row-fluid"><h1> Welcome to Master Board</h1></div>');
        done();
      }
    );
  })
});
