const mongoose = require(`mongoose`)

mongoose    
    .connect(`mongodb+srv://alisid9835:safais34@nervcorp.5macynj.mongodb.net/?retryWrites=true&w=majority`)
    .then(()=>{
        console.log(`Successfully connected to MongoDB!`)
    })
    .catch((e)=>{
        console.error(`Connection Error: `, e.message)
    })

    mongoose.set(`debug`, true)
    const db = mongoose.connection
    module.exports = db