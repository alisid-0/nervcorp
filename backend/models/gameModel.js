const { Schema } = require(`mongoose`)

const gameSchema = new Schema(
    {
        name: {type: String, required: true},
        description: {type: String, required: true},
        genre: {type: String, required: true},
        release_date: {type: Date, required: true},
        platforms: {type: [String], required: true},
        developer: {type: String, required: true},
        image: {type: String, required: true}, 
    },
    {timestamps: true}
)

module.exports = gameSchema