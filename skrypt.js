// const express = require('express')
// const app = express()
// const PORT = process.env.PORT || 3000
// app.get('/', function(req, res){
//  res.send('Szkielet programistyczny Express!')
// })
//
// app.get("/about", function(req,res){
//     res.send("<i>Autor strony: Jan Kowalski.")
// })
// app.listen(PORT, () => console.log(`Server działa na porcie: ${PORT}`))

var express = require('express')
var port = 3000
var app = express()
app.get('/name/:imie/:some', function (request, response) {
    response.status(200)
    response.set('Content-Type', 'text/html')
    response.end('<html><body>' + '<h1>Cześć ' + request.params.imie + ' i ' + request.params.some +'</h1>' + '</body></html>'
    )
})
app.listen(port, function () {
    console.log('Serwer jest uruchomiony, ' + ' otwórz przeglądarkę i wpisz adres http://localhost:%s',
        port)
})