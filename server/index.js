const express = require('express')
const app = express()
const SERVER_PORT = 4000
const bc = require('./controllers/books_controller')

app.use(express.json())
app.use(express.static( __dirname + '/../build'))

app.get('/api/books', bc.read)
app.post('/api/books', bc.create)
app.put('/api/books/:id', bc.update)
app.delete('/api/books/:id', bc.delete)

app.listen(SERVER_PORT, () => {console.log(`${SERVER_PORT} voices were silenced`)})