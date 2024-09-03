var express = require('express')

var app = express()

app.use(express.static(__dirname))

var messages = [
    {name: 'Maria', message:'¿qui hubo?'},
    {name: 'Simón', message:'¿que hay de comer?'}
]

app.get('/messages', (req, res) => {
    res.send(messages)
})

var server = app.listen(3000 , () => {
    console.log('server is listnening on port', server.address().port)
})

