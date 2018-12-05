const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RegionSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    pokemon: [{
        type: Schema.Types.ObjectId,
        ref: 'pokemon'
    }]
});

const Region = mongoose.model('region', RegionSchema);
module.exports = Pokemon;