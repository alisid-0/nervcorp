const express = require(`express`)
const routes = require(`./routes/AppRouter`)
const db = require(`./db`)
const logger = require(`morgan`)

const PORT = process.env.PORT || 3001
const app = express()

app.use(express.json())
app.use(logger(`dev`))

app.use(express.static(`public`))

app.use(`/api`, routes)

app.use(`*`, express.static(`public`))

app.listen(PORT, ()=> console.log(`Listening on port: ${PORT}`))


