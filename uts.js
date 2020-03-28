const common = require('./test/common');
const chai = common.chai;
var app;

function importTest(testName, path){
  describe(testName, () => {
    require(path);
  });
}

describe("AGGREGATED SET of UNIT TESTS", () =>{
  describe("1. As a guest I want to", () => {
    beforeEach(() => {
      delete require.cache[require.resolve('./test_app')];
      app = require('./test_app')();
    });

    importTest("1.1. See home page", "./test/t_index");
    importTest("1.2. See login page", "./test/t_login");
    importTest("1.3. See sign up page", "./test/t_signup");

    // negative tests
    // importTest("1.4 Don't see home page", "./test/negative/t_news");
    // importTest("1.5 Don't see home page", "./test/negative/t_calendar");
    // importTest("1.5 Don't see home page", "./test/negative/t_game");
    // importTest("1.5 Don't see home page", "./test/negative/t_create");
    // importTest("1.5 Don't see home page", "./test/negative/t_apply");

    afterEach((done) => {
      app.close(done);
    });
  });

  describe("2. As Logged In User I want to", () => {
    importTest("2.1. See news filed as default UI", "./test/home/t_news");
    importTest("2.2. See calendar with events", "./test/home/t_calendar");
    importTest("2.3. See my games UI", "./test/home/t_game");
    importTest("2.4. Create own Game", "./test/home/games/t_create");
    importTest("2.5. Apply for open Game", "./test/home/games/t_apply");
  });

  describe("3. As Admin I want to", () => {
    importTest("3.1. Been able to manage the game", "./test/home/games/t_manage");
  });

  describe("4. As Player I want to", () => {
    importTest("4.1. Been able to see the game", "./test/home/games/t_browse");
  });
});
