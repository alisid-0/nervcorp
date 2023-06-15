const mongoose = require(`mongoose`)
const gameSchema = require(`./gameModel`)
const userSchema = require(`./userModel`)
const blogPostSchema = require(`./blogPostModel`)
const commentSchema = require(`./commentModel`)

const Game = mongoose.model(`Game`, gameSchema)
const User = mongoose.model(`User`, userSchema)
const BlogPost = mongoose.model(`BlogPost`, blogPostSchema)
const Comment = mongoose.model(`Comment`, commentSchema)

module.exports = {
    Game,
    User,
    BlogPost,
    Comment
}

