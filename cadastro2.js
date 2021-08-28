// Espera carregar a página
document.addEventListener('DOMContentLoaded', function() {
    
    //Guarda os inputs em constantes
    const cpf = document.querySelector('.cpf')
    const estado = document.querySelector('.estado')
    const cidade = document.querySelector('.cidade')

    //Espera os eventos de blur ou click nos elementos selecionados
    cpf.addEventListener("blur", verifyCPF)
    estado.addEventListener("focusin", verifyEstado)
    cidade.addEventListener("blur", verifyCidade)

})


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
        window.location = 'cadastro3.html'
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

