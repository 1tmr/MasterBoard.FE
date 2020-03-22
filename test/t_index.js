const common = require('./common');
const chai = common.chai;
const should = chai.should();
const expect = chai.expect;
const url = common.url;

describe('1.1.1. that is able to', () =>{
  it('bring 200 status for valid page', function(done){
    chai.request(url).get('/').end(
      (err, res) => {
        res.should.have.status(200);
        done();
      }
    );
  });

  it('show correct content exists', function(done){
    chai.request(url).get('/').end(
      (err, res) => {
        res.text.should.contain("<h1> Welcome to Master Board</h1>");
        res.text.should.contain('<h5 class="card-title"> Welcome to Master Board</h5>');
        done();
      }
    );
  });

  it('not show wrong content', function(done){
    chai.request(url).get('/').end(
      (err, res) => {
        res.text.should.not.contain("<h1> Hello user</h1>");
        done();
      }
    );
  });

  it('return 404 status for invalid page', function(done){
    chai.request(url).get('/bad/request').end(
      (err, res) => {
        res.should.have.status(404);
        done();
      }
    );
  });
});
