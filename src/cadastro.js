valores = {}
nro_cadastro = 1

function hideCard(){
    const cadastro = document.querySelector('.cadastro'+nro_cadastro)
    nro_cadastro += 1
    cadastro.style.display = 'none'
}

const petsURL = 'http://localhost:3000/pets'

// Espera carregar a página
document.addEventListener('DOMContentLoaded', function() {
    
    //============CADASTRO 1================================
    const formCadastro1 = document.querySelector('#cadastro1')
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

    formCadastro1.addEventListener('submit', (e) => {
        e.preventDefault()

        const valorEmail = email.value
        const valorSenha = senha2.value
        const valorNome = nome.value

        valores = { email: valorEmail, senha: valorSenha, dono: valorNome }
        console.log(valores)

    })
    
    //============CADASTRO 2================================
    const formCadastro2 = document.querySelector('#cadastro2')
    //Guarda os inputs em constantes
    const cpf = document.querySelector('.cpf')
    const estado = document.querySelector('.estado')
    const cidade = document.querySelector('.cidade')

    //Espera os eventos de blur ou click nos elementos selecionados
    cpf.addEventListener("blur", verifyCPF)
    estado.addEventListener("focusin", verifyEstado)
    cidade.addEventListener("blur", verifyCidade)

    formCadastro2.addEventListener('submit', (e) => {
        e.preventDefault()

        console.log(e.target)

        const valorCPF = cpf.value
        const valorEstado = estado.value
        const valorCidade = cidade.value

        const maisValores = { cpf: valorCPF, estado: valorEstado, cidade: valorCidade }
        Object.entries(maisValores).forEach(([chave, valor]) => {valores[chave] = valor})
        console.log(valores)

    })
    //=======================CADASTRO 3=========================

    const nome_do_pet = document.querySelector('#nome_do_pet')
    const natureza = document.querySelector('#natureza')
    const raca = document.querySelector('#raca')
    const idade = document.querySelector('#idade')
    const sexo = document.querySelector('#sexo')
    const tamanho = document.querySelector('#tamanho')
    const castrado = document.querySelector('#castrado')
    const sobre = document.querySelector('#sobre')
    const formCadastro3 = document.querySelector('#cadastro3')

    nome_do_pet.addEventListener("blur", verificar_nome_pet)
    raca.addEventListener("blur", verificar_raca)
    sobre.addEventListener("blur", verificar_sobre)

    formCadastro3.addEventListener('submit', (e) => {
        e.preventDefault()

        const valorNomePet = nome_do_pet.value
        const valorNatureza = natureza.value
        const valorRaca = raca.value
        const valorIdade = idade.value
        const valorSexo = sexo.value
        const valorTamanho = tamanho.value
        const valorCastrado = castrado.value
        const valorSobre = sobre.value

        maisValores = { nome: valorNomePet, natureza: valorNatureza, raca: valorRaca, idade: valorIdade, 
            sexo: valorSexo, tamanho: valorTamanho, castrado: valorCastrado, sobre: valorSobre}
        Object.entries(maisValores).forEach(([chave, valor]) => {valores[chave] = valor})
        console.log(valores)
    })

    //=======================CADASTRO 4=============================

    const foto = document.querySelector('#foto')
    const formCadastro4 = document.querySelector('#cadastro4')

    foto.addEventListener('blur', verifyLink)

    formCadastro4.addEventListener('submit', (e) =>{
        e.preventDefault()

        const valorFoto = foto.value
        
        console.log(valorFoto)
        console.log(foto.value)
        maisValores = {foto: valorFoto}
        Object.entries(maisValores).forEach(([chave, valor]) => {valores[chave] = valor})
        console.log(valores)

        // POST objeto valores em pets.json
        fetch(`${petsURL}`,{
            method: 'POST',
            body: JSON.stringify(valores),
            headers: {
                'Content-Type': 'application/json'
            }
        
        }).then(response => response.json())
        
    })


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
        hideCard()
    }

    return false

}

function verifyCPF() {
    if (inputs.cpf.value == "") {
        inputs.cpf.style="border:1px solid;border-color: red"
        return false
    }else if (inputs.cpf.value.replace(/\D+/g, '').length !== 11) {
        inputs.cpf.style="border:1px solid;border-color: red"
        return false
    }else if (!TestaCPF(inputs.cpf.value.replace(/\D+/g, ''))) {
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
    else if (inputs.cpf.value.replace(/\D+/g, '').length !== 11) {
        window.alert("CPF inválido")
    }
    else if (!TestaCPF(inputs.cpf.value.replace(/\D+/g, ''))) {
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
        hideCard()
    }
    return false
}

//Retirado de https://www.devmedia.com.br/validar-cpf-com-javascript/23916

function TestaCPF(strCPF) {
    var Soma;
    var Resto;
    Soma = 0;
  if (strCPF == "00000000000") return false;

  for (i=1; i<=9; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
  Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(9, 10)) ) return false;

  Soma = 0;
    for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(10, 11) ) ) return false;
    return true;
}

function verificar_nome_pet(){
    if (formulario3.nome_do_pet.value == "") {
        formulario3.nome_do_pet.style="border:1px solid;border-color: red"
        return false
    }
    else {
        return true
    }
}


function verificar_raca(){
    if (formulario3.raca.value == "") {
        formulario3.raca.style="border:1px solid;border-color: red"
        return false
    }
    else {
        return true
    }
}

function verificar_sobre(){
    if (formulario3.sobre.value == "") {
        formulario3.sobre.style="border:1px solid;border-color: red"
        return false
    }
    else {
        return true
    }
}

function verificar_cadastro3(){

    verificar_nome_pet()
    if (formulario3.nome_do_pet.value == "") {
        window.alert("Nome do pet obrigatório")
    
    }

    
    verificar_raca()
    if (formulario3.raca.value == "") {
        window.alert("Raça obrigatória")
    }


    verificar_sobre()
    if (formulario3.sobre.value == "") {
        window.alert("É obrigatório digitar algo na seção sobre")
    }



    if (verificar_nome_pet() && verificar_raca() && verificar_sobre()) {
        hideCard()
    }

    return false

}

function verifyLink(){
    if(formulario4.foto.value == ""){
        formulario4.foto.style="border:1px solid;border-color: red"
        return false
    }else {
        formulario4.foto.style="border: 1px solid;border-color: grey"
        return true
    }
}

function verifyCadastro4(){

    verifyLink()
    if (formulario4.foto.value == ""){
        window.alert("Link da foto obrigatório")
    }

    if(verifyLink()){
        hideCard()
    }
    return false
}