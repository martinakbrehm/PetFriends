// Espera carregar a página
document.addEventListener('DOMContentLoaded', function() {
    
    //Guarda os inputs em constantes
    const email = document.querySelector('.email')
    const senha1 = document.querySelector('.senha1')
    const submit = document.querySelector('.button_cadastro')
    const senha2 = document.querySelector('.senha2')
    const nome = document.querySelector('.nome')

    //Espera os eventos de blur ou click nos elementos selecionados
    nome.addEventListener("blur", verificar_nome)
    email.addEventListener("blur", verificar_email)
    senha1.addEventListener("blur", verificar_senha1)
    senha2.addEventListener("blur", verificar_senha2)

})

function verificar_nome() {
    if (formulario.nome.value == "") {
        formulario.nome.style="border:1px solid;border-color: red"
        return false
    }
    else {
        return true
    }
}

function verificar_email() {
    if (formulario.email.value == "") {
        formulario.email.style="border:1px solid;border-color: red"
        return false
    } 
    else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formulario.email.value)){
        formulario.email.style="border:1px solid;border-color: red"
        window.alert("E-mail inválido")
        return false  
    }    
    else {
        return true
    }
}

function verificar_senha1() {
    if (formulario.senha1.value == "") {
        formulario.senha1.style="border:1px solid;border-color: red"
        return false
    } 
    else {
        return true
    }
}

function verificar_senha2() {
    if (formulario.senha2.value == "") {
        formulario.senha2.style="border:1px solid;border-color: red"
        window.alert("Digite a senha novamente")
        return false
    } 
    if (formulario.senha1.value !== formulario.senha2.value){
        window.alert("As senhas não conferem")
    }  
    else {
        return true
    }
}

function verificar_cadastro(){

    verificar_nome()
    if (formulario.nome.value == "") {
        window.alert("Nome obrigatório")
    
    }
    verificar_email()
    if (formulario.email.value == "") {
        window.alert("Email obrigatório")
    }
    verificar_senha1()
    verificar_senha2()
    if (formulario.senha1.value == "" || formulario.senha2.value == "") {
        window.alert("Senha obrigatória")
    }

    if (verificar_nome() && verificar_email() && verificar_senha1() && verificar_senha2()) {
        window.location = 'cadastro2.html'
    }

    return false

}


