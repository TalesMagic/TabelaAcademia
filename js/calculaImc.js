let titulo = document.querySelector('.titulo')
titulo.textContent = 'Aparecida Nutricionista'

//--------------------------------------------------\\

let pacientes = document.querySelectorAll('.paciente')

for (var i = 0; i<= pacientes.length; i++){
    let paciente = pacientes[i]

    //recebendo o peso do paciente
    let pesoTd = paciente.querySelector('.info-peso')
    let peso = pesoTd.textContent

    //recebendo a altura do paciente
    let alturaTd = paciente.querySelector('.info-altura')
    let altura = alturaTd.textContent

    
    let imcTd = paciente.querySelector('.info-imc')
    //toFixed para ajustar as casas decimais

    let pesoEhValido = validaPeso(peso)
    let alturaEhValido = validaAltura(altura)

    if(!pesoEhValido){
        console.log('Peso Invalido')
        pesoEhValido = false
        imcTd.textContent ='Peso Invalido'
        paciente.classList.add('paciente-invalido')
    }

    if(!alturaEhValido){
        console.log('Altura Invalido')
        pesoEhValido = false
        imcTd.textContent ='Altura Invalido'
        paciente.classList.add('paciente-invalido')
    }

    if(pesoEhValido && alturaEhValido){
        let imc = calculaImc(peso, altura)
        imcTd.textContent = imc
    }
}

function calculaImc (peso, altura){
    let imc = 0
    //calculando o imc do paciente
    imc = peso / (altura * altura)
    return imc.toFixed(2)

}

function validaPeso(peso){
    if(peso >= 0 && peso <= 1000){
        return true
    }else{
        return false
    }
}

function validaAltura(altura){
    if(altura >= 0 && altura <= 3.00){
        return true
    }else{
        return false
    }
}