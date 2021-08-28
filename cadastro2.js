// Espera carregar a página
document.addEventListener('DOMContentLoaded', function() {
    
    //Guarda os inputs em constantes
    const cpf = document.querySelector('.cpf')
    const estado = document.querySelector('.estado')
    const cidade = document.querySelector('.cidade')

    //Espera os eventos de blur ou click nos elementos selecionados
    cpf.addEventListener("blur", verifyCPF)
    estado.addEventListener("blur", verifyEstado)
    cidade.addEventListener("blur", verifyCidade)

})


function verifyCPF() {
    if (inputs.cpf.value == "") {
        inputs.cpf.style="border:1px solid;border-color: red"
        return false
    }
    else if (inputs.cpf.value.length !== 11) {
        inputs.cpf.style="border:1px solid;border-color: red"
        return false
    }else{
        inputs.cpf.style="border: 1px solid;border-color: grey"
        return true
    }
}

function verifyEstado() {
    if (inputs.estado.value == "") {
        inputs.estado.style="border:1px solid;border-color: red"
        return false
    }else{
        inputs.estado.style="border: 1px solid;border-color: grey"
        return true
    }   
}

function verifyCidade() {
    if (inputs.cidade.value == "") {
        inputs.cidade.style="border:1px solid;border-color: red"
        return false
    }else{
        inputs.cidade.style="border: 1px solid;border-color: grey"
        return true
    }   
}

function verifyCadastro1() {
    verifyCPF()
    if (inputs.cpf.value == "") {
        window.alert("CPF obrigatório")
    }
    else if (inputs.cpf.value.length !== 11) {
        window.alert("CPF inválido")
    }
    verifyEstado()
    if (inputs.estado.value == "") {
        window.alert("Estado obrigatório")
    }
    verifyCidade()
    if (inputs.cidade.value == "") {
        window.alert("Cidade obrigatória")
    }

    if (verifyCPF() && verifyEstado() && verifyCidade()) {
        window.location = 'cadastro3.html'
    }

    return false
    
}
