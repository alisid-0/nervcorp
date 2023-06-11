const mongoose = require(`mongoose`)
const gameSchema = require(`./gameModel`)
const userSchema = require(`./userModel`)
const reviewSchema = require(`./reviewModel`)
const commentSchema = require(`./commentModel`)

const Game = mongoose.model(`Game`, gameSchema)
const User = mongoose.model(`User`, userSchema)
const Review = mongoose.model(`Review`, reviewSchema)
const Comment = mongoose.model(`Comment`, commentSchema)

module.exports = {
    Game,
    User,
    Review,
    Comment
}

