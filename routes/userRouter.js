const Router = require(`express`).Router()
const controller = require(`../controllers/userController`)

Router
    .get(`/`, controller.getAllUsers)

module.exports = Router