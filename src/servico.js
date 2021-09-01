var nro_pets = 0
document.addEventListener('DOMContentLoaded', function() {

    const background = document.querySelector('.background')

    const petsURL = 'http://localhost:3000/pets'
    
    fetch(`${petsURL}`)
        .then( response => response.json() )
        .then( petData => petData.forEach(function(pet) {
        background.innerHTML += `
        <div class="card" id=${pet.id}>
        <img class="foto"src=${pet.foto == "" ? "../assets/jonas.png" : pet.foto}>
        <div class="descricao">
            <div class="nome">
                <h2>${pet.nome},</h2><h2 class="idade">${pet.idade}</>
            </div>
            <p class="raca">${pet.raca}</p>
            <p class="sobre">${pet.sobre}</p>    
        </div>
        <div class="buttons">
            <button class="dislike"><img class="icon" src="../assets/dislike.png" onclick="hideCard()"></button>
            <button class="like"><img class="icon" src="../assets/like.png" onclick="hideCard()"></button>
        </div>
        </div> `
        nro_pets = pet.id
        })) // end of book fetch
})


function hideCard(){
    const card = document.getElementById(nro_pets)
    nro_pets == 1 ? (window.alert("Você chegou no fim")) : nro_pets -= 1
    card.style.display = 'none'

}