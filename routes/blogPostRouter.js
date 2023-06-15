const Router = require(`express`).Router()
const controller = require(`../controllers/blogPostController`)

Router
    .get(`/`, controller.getAllPosts)
    .post(`/`, controller.createPost)

module.exports = Router