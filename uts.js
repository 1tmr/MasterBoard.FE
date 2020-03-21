const common = require('./test/common');
//const app = common.app;
const chai = common.chai;
const request = chai.request(app);
var app;

function importTest(testName, path){
  describe(testName, function () {require(path);});
}

describe("top", () =>{
  beforeEach(() => {
    delete require.cache[require.resolve('./test_app')];
    app = require('./test_app')();
  });
  importTest("Test home page", "./test/t_index");
  importTest("Test login page", "./test/t_login");
  importTest("Test sign up page", "./test/t_signup");
  afterEach((done) => {
    app.close(done);
  });
});
