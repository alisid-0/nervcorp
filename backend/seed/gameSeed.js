const db = require(`../db`)
const { Game } = require(`../models`)

const main = async()=>{
    const games = [
        {
            name: `Lunaris`,
            description: `Journey through a strange world on a mission to save a mysterious scientist and their dying world. With only one ally by your side, you must unravel the bizarre circumstances behind the falling moon and fight to prevent its cataclysmic impact. But as you explore the surreal landscapes and uncover dark secrets, you begin to question your own reality and the true nature of your mission.`,
            genre: `Adventure`,
            release_date: new Date(),
            platforms: [`Microsoft Windows`],
            developer: `Nerv Corporation`,
            image: `https://img.itch.zone/aW1nLzExMzg4NDI5LnBuZw==/original/%2FMVSoO.png`
        }
    ]
    await Game.insertMany(games)
    console.log(`Created games!`)
}

const run = async() =>{
    await main()

    db.close()
}

run()