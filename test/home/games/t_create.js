const common = require('../../common');
const chai = common.chai;
const should = chai.should();
const expect = chai.expect;
const url = common.url;
const path = '/admin/create'


describe('2.4.1. where he can', () => {
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
  it("see that he creates a game", done => {
    chai.request(url)
    .get(path)
    .set("authorization", "Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAbWFpbC5jb20iLCJpZCI6MSwiZXhwIjoxNTkwNTgyNTkyLCJpYXQiOjE1ODU0MDIxOTJ9.yL4Tu69s9rTNd_Tysu43y-PHOZOROKvQuf4-xQ-sReY")
    .end(
      (err, res) => {
        res.text.should.contain('<h4 class="bm-3">Create your Game</h4>');
        done();
      }
    );
  });
  it("see mandatory fields", (done) =>{
    chai.request(url)
    .get(path)
    .set("authorization", "Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAbWFpbC5jb20iLCJpZCI6MSwiZXhwIjoxNTkwNTgyNTkyLCJpYXQiOjE1ODU0MDIxOTJ9.yL4Tu69s9rTNd_Tysu43y-PHOZOROKvQuf4-xQ-sReY")
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
    chai.request(url)
    .get(path)
    .set("authorization", "Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAbWFpbC5jb20iLCJpZCI6MSwiZXhwIjoxNTkwNTgyNTkyLCJpYXQiOjE1ODU0MDIxOTJ9.yL4Tu69s9rTNd_Tysu43y-PHOZOROKvQuf4-xQ-sReY")
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
    chai.request(url)
    .get(path)
    .set("authorization", "Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAbWFpbC5jb20iLCJpZCI6MSwiZXhwIjoxNTkwNTgyNTkyLCJpYXQiOjE1ODU0MDIxOTJ9.yL4Tu69s9rTNd_Tysu43y-PHOZOROKvQuf4-xQ-sReY")
    .end(
      (err, res) => {
          res.text.should.contain('<form method="post" action="/admin/create" enctype="application/json">');
          res.text.should.contain('<button class="btn btn-primary btn-lg btn-block" type="submit">Create</button>');
          done();
      }
    );
  })
});
