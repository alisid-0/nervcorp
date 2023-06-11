const { User } = require(`../models`)

const getAllUsers = async(req,res) =>{
    try{
        const users = await User.find()
        res.status(200).json(users)
    } catch(e){
        res.status(400).send(e.message)
    }
}

module.exports ={
    getAllUsers
}
