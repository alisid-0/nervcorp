const { Schema } = require(`mongoose`)

const blogPostSchema = new Schema(
    {
        post_title: {type: String, required: true},
        post_date: {type: Date, required: true},
        post: {type: String, required: true},
        images: [String],
        comment: {type: Schema.Types.ObjectId, ref: `Comment`}
    },
    {timestamps: true}
)

module.exports = blogPostSchema