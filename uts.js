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

  describe("1. As a guest I want to", () => {
    importTest("1.1. See home page", "./test/t_index");
    importTest("1.2. See login page", "./test/t_login");
    importTest("1.3. See sign up page", "./test/t_signup");
  });

  describe("2. As Logged In User I want to", () => {
    importTest("2.1. See news filed as default UI", "./test/home/t_news");
    importTest("2.2. See calendar with events", "./test/home/t_calendar");
    importTest("2.3. See my games UI", "./test/home/t_game");
    importTest("2.4. Create own Game", "./test/home/games/t_create");
  });

  afterEach((done) => {
    app.close(done);
  });
});
