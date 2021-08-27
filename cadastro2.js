function verificar_nome() {
    if (inputs.nome.value == "") {
        inputs.nome.style="border:1px solid;border-color: red"
    }
}

function verificar_email() {
    if (inputs.email.value == "") {
        inputs.email.style="border:1px solid;border-color: red"
    }   
}

function verificar_senha1() {
    if (inputs.senha1.value == "") {
        inputs.senha1.style="border:1px solid;border-color: red"
    }   
}

function verificar_senha2() {
    if (inputs.senha2.value == "") {
        inputs.senha2.style="border:1px solid;border-color: red"
        window.alert("Digite a senha novamente")
    } 
    if (inputs.senha1.value !== inputs.senha2.value){
        window.alert("As senhas não conferem")
    }  
}


