const common = require('./test/common');
//const app = common.app;
const chai = common.chai;
const request = chai.request(app);
var app;

function importTest(testName, path){
  describe(testName, () => {
    require(path);
  });
}

describe("AGGREGATED SET of UNIT TESTS", () =>{
  beforeEach(() => {
    delete require.cache[require.resolve('./test_app')];
    app = require('./test_app')();
  });

  describe("As a guest I want to", () => {
    importTest("See home page", "./test/t_index");
    importTest("See login page", "./test/t_login");
    importTest("See sign up page", "./test/t_signup");
  });

  describe("As Logged In User I want to", () => {
    importTest("See news filed as default UI", "./test/home/t_news");
    importTest("See calendar with events", "./test/home/t_calendar");
    importTest("See my games UI", "./test/home/t_game");
  });

  afterEach((done) => {
    app.close(done);
  });
});
