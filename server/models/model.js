const mongoose = require("mongoose")

mongoose.connect('mongodb://localhost/1955', {useNewUrlParser: true});
var PeopleSchema = new mongoose.Schema({
    name: {type: String, required: [true, "You cannot leave a name blank!"], minlength: 3}}, {timestamps: true});
    const People = mongoose.model("People", PeopleSchema);