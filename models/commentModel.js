const { Schema } = require(`mongoose`)

const commentSchema = new Schema(
    {
        game: {type: Schema.Types.ObjectId, ref: `Game`},
        user: {type: Schema.Types.ObjectId, ref: `User`},
        comment: {type: String, required: true}
    },
    {timestamps: true}
)