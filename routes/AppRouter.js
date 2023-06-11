const Router = require(`express`).Router()

const CommentRouter = require(`./commentRouter`)
const GameRouter = require(`./gameRouter`)
const ReviewRouter = require(`./reviewRouter`)
const UserRouter = require(`./userRouter`)

Router.use(`/comments`, CommentRouter)
Router.use(`/games`, GameRouter)
Router.use(`/reviews`, ReviewRouter)
Router.use(`/users`, UserRouter)

module.exports = Router