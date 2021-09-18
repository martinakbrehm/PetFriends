import mongoose from 'mongoose'
const Schema = mongoose.Schema

const PetSchema = new Schema ({
    "email": String,
    "senha": String,
    "dono": String,
    "cpf": String,
    "estado": String,
    "cidade": String,
    "nome": String,
    "natureza": String,
    "raca": String,
    "idade": String,
    "sexo": String,
    "tamanho": String,
    "castrado": String,
    "sobre": String,
    "foto": String,
    "id": Number
})

export { PetSchema }