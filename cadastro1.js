
function verifyCPF() {
    if (inputs.cpf.value == "") {
        inputs.cpf.style="border:1px solid;border-color: red"
    }
    else if (inputs.cpf.length !== 11) {
        window.alert("CPF inválido")
        inputs.cpf.style="border:1px solid;border-color: red"
    }
}

function verifyEstado() {
    if (inputs.estado.value == "") {
        inputs.estado.style="border:1px solid;border-color: red"
    }   
}

function verifyCidade() {
    if (inputs.cidade.value == "") {
        inputs.cidade.style="border:1px solid;border-color: red"
    }   
}

function verifyCadastro1() {
    verifyCPF()
    verifyEstado()
    verifyCidade()
}
