let titulo = document.querySelector('.titulo')
titulo.textContent = 'Aparecida Nutricionista'
//---------------------------------------------------------------------------
//selecionando todos os pacientes da tabela e colocando dentro de uma lista
let pacientes = document.querySelectorAll('.paciente')
//percorrendo a lista de pacientes
for (var i = 0; i <= pacientes.length; i++){
    let paciente = pacientes[i]

    //recebendo o peso do paciente 
    let pesoTd = paciente.querySelector('.info-peso')
    let peso = pesoTd.textContent

    //recebendo a altura do paciente
    let alturaTd = paciente.querySelector('.info-altura')
    let altura = alturaTd.textContent

    //toFixed para ajustar as casas decimais
    let imcTd = paciente.querySelector('.info-imc')
    let imc = calculaImc (peso, altura)
    imcTd.textContent = imc

}

function calculaImc (peso, altura){
    let imc = 0
    imc = peso / (altura * altura)
    return imc.toFixed(2)
}


