const { Schema } = require(`mongoose`)

const reviewSchema = new Schema(
    {
        game: {type: Schema.Types.ObjectId, ref: `Game`},
        user: {type: Schema.Types.ObjectId, ref: `User`},
        rating: {type: Number, required: true},
        comment: {type: String, required: true}
    },
    {timestamps: true}
)

module.exports = reviewSchema