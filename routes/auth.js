const USERS = require("./json/users.json");

// add
var add = function (app) {

    // get all
    app.get("/auth/check", (req, res) => {
        res.header("Content-Type", 'application/json');
        res.end(JSON.stringify(USERS[0]));
    });
};

// export
module.exports = { add };