const { BlogPost } = require(`../models`)

const getAllPosts = async(req,res)=>{
    try{
        const posts = await BlogPost.find()
        res.status(200).json(posts)
    } catch(e){
        res.status(400).send(e.message)
    }
}

const createPost = async(req,res)=>{
    const post = new BlogPost(req.body)
    try{
        await post.save()
        res.status(201).send(post)        
    } catch(e){
        res.status(400).send(e.message)
    }
}

module.exports = {
    getAllPosts,
    createPost
}