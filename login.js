// Espera carregar a página
document.addEventListener('DOMContentLoaded', function() {
    
    //Guarda os inputs em constantes
    const email = document.querySelector('.email')
    const password = document.querySelector('.password')
    const submit = document.querySelector('.submit')
    const form = document.querySelector('.form')

    //Espera os eventos de blur ou click nos elementos selecionados
    email.addEventListener("blur", verifyEmail)
    password.addEventListener("blur", verifyPassword)
    form.addEventListener("submit", verifyLogin)
})


function verifyEmail() {
    if (inputs.email.value == "") {
        inputs.email.style="border:1px solid;border-color: red"
        return false
    }
    else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputs.email.value)){
        inputs.email.style="border:1px solid;border-color: red"
        window.alert("E-mail inválido")
        return false
    }
    else {
        inputs.email.style="border: 1px solid;border-color: grey"
        return true
    }
}

function verifyPassword() {
    if (inputs.password.value == "") {
        inputs.password.style="border:1px solid;border-color: red"
        return false

    }   
    else if (inputs.password.length < 8){
        inputs.password.style="border:1px solid;border-color: red"
        window.alert("Senha inválida, mínimo 8 caracteres")
        return false
    }
    else{
        inputs.password.style="border: 1px solid;border-color: grey"
        return true
    }
}

function verifyLogin(event) {
    event.preventDefault()
    verifyEmail()
    if (inputs.email.value == "") {
        window.alert("Email obrigatório")
    }
    verifyPassword()
    if (inputs.password.value == "") {
        window.alert("Senha obrigatória")
    }

    if (verifyEmail() && verifyPassword()) {
        window.location = 'servico.html'
    }

    return false
}
