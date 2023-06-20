const Router = require(`express`).Router()
const controller = require(`../controllers/gameController`)

Router
    .get(`/`, controller.getAllGames)

module.exports = Router