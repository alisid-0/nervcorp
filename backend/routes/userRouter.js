const Router = require(`express`).Router()
const controller = require(`../controllers/userController`)

Router
    .get(`/`, controller.getAllUsers)
    .get('/:username', controller.findUser)
    .post('/', controller.createUser)

module.exports = Router