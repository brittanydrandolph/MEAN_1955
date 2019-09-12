const person = require("../controllers/control");

module.exports = function(app){
    app.get("/", person.index)
    app.get("/new/:name", person.addPerson)
    app.get("/remove/:name", person.removePerson)
    app.get("/:name", person.details)
}

