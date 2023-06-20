const Router = require(`express`).Router()
const controller = require(`../controllers/commentController`)

Router
    .get(`/`, controller.getAllComments)

module.exports = Router