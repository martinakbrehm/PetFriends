

const express = require('express') //npm install --save express
const cors = require('cors')// npm install --save cors

const app = express()
app.use(cors())

// NECESSÁRIO PARA FUNCIONAR CSS E JAVASCRIPT
app.use(express.static("src"));

app.get('/', function(req, res){
    res.send('Página Principal')
})

app.get('/cadastro', function(req, res){
    res.sendFile(__dirname + '/src/cadastro.html')
})

app.get('/login', function(req, res){
    res.sendFile(__dirname + '/src/login.html')
})

app.get('/servico', function(req, res){
    res.sendFile(__dirname + '/src/servico.html')

})

// app.get('/assets/jonas.png', function(req, res){
//     res.sendFile(__dirname+ '/assets/jonas.png')
// })

// app.get('/assets/gato.jpg', function(req, res){
//     res.sendFile(__dirname+ '/assets/gato.jpg')
// })

// app.get('/assets/dislike.png', function(req, res){
//     res.sendFile(__dirname+ '/assets/dislike.png')
// })

// app.get('/assets/like.png', function(req, res){
//     res.sendFile(__dirname+ '/assets/like.png')
// })

// CARREGAR PASTA DE IMAGENS "ASSETS"
app.use('/assets', express.static(__dirname + '/assets'))

const port = 3001
app.listen(port || process.env.PORT, ()=>(console.log('Server up!')))