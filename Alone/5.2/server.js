var express = require('express')

var app = express()

app.use(express.static(__dirname))
var server = app.listen(3000 , () => {
    console.log('server is listnening on port', server.address().port)
})