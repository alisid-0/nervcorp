const { Schema } = require(`mongoose`)

const userSchema = new Schema(
    {
        username: {type: String, required: true},
        email: {type:String, required: true},
        password: {type: String, required: true},
        games_owned: {type: Schema.Types.ObjectId, ref: `Game`}
    },
    {timestamps: true}
)

module.exports = userSchema