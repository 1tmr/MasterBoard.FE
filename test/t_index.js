const common = require('./common');
const chai = common.chai;
const should = chai.should();
const expect = chai.expect;
const url = common.url;

describe('Root page validation', () =>{
  it('Returns status 200', function(done){
    chai.request(url).get('/').end(
      (err, res) => {
        res.should.have.status(200);
        done();
      }
    );
  });

  it('Right content exists', function(done){
    chai.request(url).get('/').end(
      (err, res) => {
        res.text.should.contain("<h1> Welcome to Master Board</h1>");
        res.text.should.contain('<h5 class="card-title"> Welcome to Master Board</h5>');
        done();
      }
    );
  });

  it('Wrong content is not shown', function(done){
    chai.request(url).get('/').end(
      (err, res) => {
        res.text.should.not.contain("<h1> Hello user</h1>");
        done();
      }
    );
  });

  it('Wrong page returns 404', function(done){
    chai.request(url).get('/bad/request').end(
      (err, res) => {
        res.should.have.status(404);
        done();
      }
    );
  });
});
