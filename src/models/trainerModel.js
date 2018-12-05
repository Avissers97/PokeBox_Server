const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const TrainerSchema = new Schema ({
    username:{
        type:String,
        required:true,
        unique:true
        },
    password:{
        type:String,
        required:true
    },
    name: {
        type: String,
        required: true
    },
    pokemon: {
        type: String,
        required: true
    }
});

const Trainer = mongoose.model('trainer', TrainerSchema);
module.exports = Trainer;