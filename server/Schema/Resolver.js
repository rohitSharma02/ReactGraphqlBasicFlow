const userData = require("../MOCK_DATA.json");
//const userData = require("../FakeData.js");

// this is resolver map -> javascript object
//using arrow function
/*
below arrow function equivalent to using function like:
    function getAllUsers() {
        return userData;
    }
*/
const resolver = {
  Query: {
    getAllUsers: ()=> { 
        return userData;
    }
  },
};
//console.log(userData);

module.exports = { resolver };
