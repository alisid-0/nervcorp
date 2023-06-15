const db = require(`../db`)
const { BlogPost } = require(`../models`)

const main = async()=>{
    await BlogPost.deleteMany({})
}

const run = async() =>{
    await main()

    db.close()
}

run()