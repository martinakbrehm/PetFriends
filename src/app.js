import mongoose from 'mongoose'
import { insertPet, selectAllPets } from './PetController.js'
import express from 'express' //npm install --save express
import cors from 'cors'// npm install --save cors
import path from 'path'
const __dirname = path.resolve();

import { PetSchema } from './PetSchema.js'

const mongooseModel = mongoose.model('Pet', PetSchema)

const app = express()

const uri = 'mongodb+srv://gabriel:iYhHTTldXQlujbcq@aula-web.86px3.mongodb.net/aula-web?retryWrites=true&w=majority'

async function main() {
    await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
}

main().catch(err => console.log(err))

app.use(cors())

// NECESSÁRIO PARA FUNCIONAR CSS E JAVASCRIPT
app.use(express.static("src"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

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

app.get('/pets', async function(req, res){
    res.send(await selectAllPets())
})

app.post('/pets', function(req, res){
    insertPet(req);
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
app.use('/assets', express.static(path.join(__dirname, '/assets')))

const port = 3001
app.listen(port || process.env.PORT, ()=>(console.log('Server up at http://localhost:'+port)))