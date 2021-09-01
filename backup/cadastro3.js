function verificar_nome_pet(){
    if (formulario.nome_do_pet.value == "") {
        formulario.nome_do_pet.style="border:1px solid;border-color: red"
        return false
    }
    else {
        return true
    }
}


function verificar_raca(){
    if (formulario.raca.value == "") {
        formulario.raca.style="border:1px solid;border-color: red"
        return false
    }
    else {
        return true
    }
}




function verificar_sobre(){
    if (formulario.sobre.value == "") {
        formulario.sobre.style="border:1px solid;border-color: red"
        return false
    }
    else {
        return true
    }
}

function verificar_cadastro(){

    verificar_nome_pet()
    if (formulario.nome_do_pet.value == "") {
        window.alert("Nome do pet obrigatório")
    
    }

    
    verificar_raca()
    if (formulario.raca.value == "") {
        window.alert("Raça obrigatória")
    }


    verificar_sobre()
    if (formulario.sobre.value == "") {
        window.alert("É obrigatório digitar algo na seção sobre")
    }



    if (verificar_nome_pet() && verificar_raca() && verificar_sobre()) {
        window.location = 'cadastro4.html'
    }

    return false

}