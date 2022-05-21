const express = require('express')
const app = express()
const routes = require('./routes')
const PORT = 3001


app.use(express.json())

app.use('/', routes)

app.listen(PORT, () => {
    console.log("Gateway has started")
})