function verifyEmail() {
    if (inputs.email.value == "") {
        inputs.email.style="border:1px solid;border-color: red"

    }
    else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputs.email.value)){
        inputs.email.style="border:1px solid;border-color: red"
        window.alert("E-mail inválido")

    }
}

function verifyPassword() {
    if (inputs.password.value == "") {
        inputs.password.style="border:1px solid;border-color: red"

    }   
    else if (inputs.password.length < 8){
        inputs.password.style="border:1px solid;border-color: red"
        window.alert("Senha inválida, mínimo 8 caracteres")
    }
}

function verifyLogin() {
    verifyEmail()
    verifyPassword()
}
