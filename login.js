
function verifyEmail() {
    if (inputs.email.value == "") {
        window.alert("Nenhum e-mail foi digitado!")
    }
}

function verifyPassword() {
    if (inputs.password.value == "") {
        window.alert("Nenhuma senha foi digitada!")
    }   
}

function verifyLogin() {
    verifyEmail()
    verifyPassword()
}
