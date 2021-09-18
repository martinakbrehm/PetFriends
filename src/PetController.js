import mongoose from 'mongoose'
import { PetSchema } from './PetSchema.js'

const mongooseModel = mongoose.model('Pet', PetSchema)

async function selectAllPets(){
    const query = await mongooseModel.find({}).exec()
    return query
}

function insertPet(pet){
    console.log(pet.body)
    const entry = new mongooseModel(pet.body)

    entry.save(console.log('Pet inserido com sucesso!'))
}

export { insertPet, selectAllPets }