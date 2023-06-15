const Router = require(`express`).Router()

const CommentRouter = require(`./commentRouter`)
const GameRouter = require(`./gameRouter`)
const BlogPostRouter = require(`./blogPostRouter`)
const UserRouter = require(`./userRouter`)

Router.use(`/comments`, CommentRouter)
Router.use(`/games`, GameRouter)
Router.use(`/blogposts`, BlogPostRouter)
Router.use(`/users`, UserRouter)

module.exports = Router