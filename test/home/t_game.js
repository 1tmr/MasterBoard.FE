const common = require('../common');
const chai = common.chai;
const should = chai.should();
const expect = chai.expect;
const url = common.url;
const path = '/game'


describe('2.3.1. that is able to', () => {
  it("show up with 200 status", (done) =>{
    chai.request(url)
    .get(path)
    .set("authorization", "Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAbWFpbC5jb20iLCJpZCI6MSwiZXhwIjoxNTkwNTgyNTkyLCJpYXQiOjE1ODU0MDIxOTJ9.yL4Tu69s9rTNd_Tysu43y-PHOZOROKvQuf4-xQ-sReY")
    .end(
      (err, res) => {
        res.should.have.status(200);
        done();
      }
    );
  });
  it("show available games", (done) =>{
    chai.request(url)
    .get(path)
    .set("authorization", "Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAbWFpbC5jb20iLCJpZCI6MSwiZXhwIjoxNTkwNTgyNTkyLCJpYXQiOjE1ODU0MDIxOTJ9.yL4Tu69s9rTNd_Tysu43y-PHOZOROKvQuf4-xQ-sReY")
    .end(
      (err, res) => {
        res.text.should.contain('<li class="nav-item"><a class="nav-link" href="/home">News</a></li>');
        res.text.should.contain('<li class="nav-item"><a class="nav-link" href="/calendar">Game Calendar</a></li>');
        res.text.should.contain('<li class="nav-item active"><a class="nav-link" href="/game">My Games</a></li>');
        res.text.should.contain('<li class="nav-item"><a class="nav-link" href="/profile">Profile</a></li>');
        res.text.should.contain('<div class="row-fluid"><h1>Welcome to your Games Board</h1></div>');
        done();
      }
    );
  });
  it("allow to create a game", (done) =>{
    chai.request(url)
    .get(path)
    .set("authorization", "Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAbWFpbC5jb20iLCJpZCI6MSwiZXhwIjoxNTkwNTgyNTkyLCJpYXQiOjE1ODU0MDIxOTJ9.yL4Tu69s9rTNd_Tysu43y-PHOZOROKvQuf4-xQ-sReY")
    .end(
      (err, res) => {
          res.text.should.contain('<a class="btn btn-primary col-sm-4" href="/admin/create">Create Game</a>');
          done();
      }
    );
  })
});
