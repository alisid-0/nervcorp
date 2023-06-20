const { User } = require(`../models`)

const getAllUsers = async(req,res) =>{
    try{
        const users = await User.find()
        res.status(200).json(users)
    } catch(e){
        res.status(400).send(e.message)
    }
}

const findUser = async(req,res)=>{
    const { email } = req.body
    try{
        const user = await User.findOne({email})
        if (user){
            res.status(200).json(user)
        }
    } catch(e){
        res.status(400).json(`User not found!`)
    }
}

const createUser = async(req,res)=>{
    const users = new User(req.body)
    try{
        await users.save()
        res.status(201).send(user)
    } catch(e){
        res.status(400).send(e.message)
    }
}

module.exports ={
    getAllUsers,
    createUser,
    findUser
}
