const express = require('express')
const app = express()
const port = 5000;

app.use(express.static(__dirname + '/public/')) // telling express where our static files are

app.get('/', (req, res) => {
    res.sendFile(__dirname + 'index.html') // sending index.html to run
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})