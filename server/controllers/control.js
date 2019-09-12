const mongoose = require("mongoose");
const People = mongoose.model("People");

module.exports = {
    index: function(req, res){
        People.find()
            .then(people => res.json(people))
            .catch(err => res.json(err));
        },

    addPerson: function(req, res){
        People.create({name: req.params.name})
            .then(newPerson => res.json({added:true}))
            .catch(err => res.json(err));
    }, 

    removePerson: function(req, res){
        People.remove({name: req.params.name})
            .then(deletedPerson => res.json({deleted:true}))
            .catch(err => res.json(err));
    },

    details: function(req, res){
        People.findOne({name: req.params.name})
            .then(people => res.json(people))
            .catch(err =>res.json(err));
    }
}