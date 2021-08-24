
function verifyCPF() {
    if (inputs.cpf.value == "") {
        window.alert("Nenhum CPF foi digitado!")
    }
}

function verifyEstado() {
    if (inputs.estado.value == "") {
        window.alert("Nenhum estado foi digitado!")
    }   
}

function verifyCidade() {
    if (inputs.cidade.value == "") {
        window.alert("Nenhuma cidade foi digitada!")
    }   
}

function verifyCadastro1() {
    verifyCPF()
    verifyEstado()
    verifyCidade()
}
