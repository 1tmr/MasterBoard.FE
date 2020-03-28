'use strict';

module.exports = {
  data: {
  1: {email: "test@mail.com",  password: "1234"},
  2: {email: "dummy@mail.com", password: "4321"}},
  find: (email) => {
    if(this.data[1].email == email){
        return this.data[1];
    } else if (this.data[2].email == email){
        return this.data[2];
    } else {
      return null;
    }
  }
}
