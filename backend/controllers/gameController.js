const { Game } = require(`../models`)

const getAllGames = async(req,res)=>{
    try{
        const games = await Game.find()
        res.status(200).json(games)
    } catch(e){
        res.status(400).send(e.message)
    }
}

module.exports = {
    getAllGames
}