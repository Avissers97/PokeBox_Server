const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PokemonSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String
    },
    pokedexId: {
        type: String,
        required: true
    },
    nickname: {
        type: String
    }
});

const Pokemon = mongoose.model('pokemon', PokemonSchema);
module.exports = Pokemon;