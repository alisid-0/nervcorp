const { Comment } = require(`../models`)

const getAllComments = async(req,res)=>{
    try{
        const comments = await Comment.find()
        res.status(200).json(comments)
    } catch(e){
        res.status(400).send(e.message)
    }
}

const createComment = async(req,res)=>{
    try{
        const { game, user, comment } = req.params
        const newComment = new Comment(
            {
                game: game,
                user: user,
                comment: comment
            }
        )
        
    } catch(e){
        console.error(e.message)
    }
}

module.exports ={
    getAllComments,
    createComment
}