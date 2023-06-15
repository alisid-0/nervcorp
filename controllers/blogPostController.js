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

const deletePost = async(req,res)=>{
    try{
        const post = await BlogPost.findByIdAndDelete(req.params.id)
        if (!post) return res.status(404).send('No post found!')
        res.status(200).send(`Post deleted successfully!`)
    } catch(e){
        res.status(500).send(e.message)
    }
}

module.exports = {
    getAllPosts,
    createPost,
    deletePost
}