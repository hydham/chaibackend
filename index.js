const express = require('express')

const app = express()

require('dotenv').config()

app.get('/', (req, res) => {
    res.send("chai aur code")
})

app.get('/twitter', (req, res) => {
    res.send("<h1>arhydham</h1>")
})

app.listen(process.env.PORT, () => console.log(`app available on  http://localhost:${process.env.PORT}`))