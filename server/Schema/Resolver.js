const userData = require("../MOCK_DATA.json");

const resolver = {
    Query: {
        getAllUser() {
            return userData;
        },
    },
};

module.exports = { resolver };