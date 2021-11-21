
const express = require('express')
const axios = require('axios')
const app = express()
const port = 3000

const database = []

app.use(express.json())
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/add-favourite', (req, res) => {
    console.log(req.body)
    database.push(req.body)
    res.send('ok')
})

app.get('/get-favourites', (req, res) => {
    res.send(JSON.stringify(database))
})

app.get('/character-search', async (req, res) => {
    const searchTerm = req.query.searchterm
    const response = await axios.get(`https://swapi.dev/api/people/?search=${searchTerm}`)
    res.send(response.data)
})

app.get('/luke', async (req, res) => {    
    const response = await axios.get('https://swapi.dev/api/people/1/')
    res.send(response.data)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

