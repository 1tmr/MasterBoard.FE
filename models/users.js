'use strict';

module.exports = {
  {_id: 1,
   email: test@mail.com,
   password: "1234"},
  {_id: 2,
   email: dummy@mail.com,
  password: "4321"},
  find: (email) => {
    this.foreach((item) =>{
      if(item.email == email)
        return item;
    }).catch(item);

    return item;
  }
}
