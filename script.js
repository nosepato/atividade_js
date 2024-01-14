// 1ª Questão
function calculoIMC(){
    let peso = parseFloat(document.querySelector('#peso').value);
    let alt = parseFloat(document.querySelector('#alt').value);
    let imc = parseFloat(peso/(alt*alt))
    if (imc <= 16) {
        document.querySelector('#resultado1').innerHTML="seu IMC é: " + imc.toFixed(2) + " Considerado como Magreza Grave";
    } else if (imc >=16 && imc <=17){
        document.querySelector('#resultado1').innerHTML="seu IMC é: " + imc.toFixed(2) + " Considerado como Magreza Moderada";
    } else if (imc >17 && imc <=18.5){
        document.querySelector('#resultado1').innerHTML="seu IMC é: " + imc.toFixed(2) + " Considerado como Magreza Leve";
    } else if (imc >18.5 && imc <=25){
        document.querySelector('#resultado1').innerHTML="seu IMC é: " + imc.toFixed(2) + " Considerado como Saudável";
    } else if (imc >25 && imc <=30){
        document.querySelector('#resultado1').innerHTML="seu IMC é: " + imc.toFixed(2) + " Considerado como Sobrepeso";
    } else if (imc >30 && imc <=35){
        document.querySelector('#resultado1').innerHTML="seu IMC é: " + imc.toFixed(2) + " Considerado como Obesidade Grau I";
    } else if (imc >35 && imc <=40){
        document.querySelector('#resultado1').innerHTML="seu IMC é: " + imc.toFixed(2) + " Considerado como Obesidade Grau II";
    } else if (imc >40){
        document.querySelector('#resultado1').innerHTML="seu IMC é: " + imc.toFixed(2) + " Considerado como Obesidade Grau III";
    }
}

// 2ª Questão
function calculoarea(){
    let base = parseFloat(document.querySelector('#base').value);
    let alt = parseFloat(document.querySelector('#altura').value);
    let area = parseFloat(base*alt)

    document.querySelector('#resultado2').innerHTML="A área é igual a " + area.toFixed(2) + " m²";
}

//3ª Questão
function tabuada(){
    let v1 = parseFloat(document.querySelector('#v1').value);
    let v2 = parseFloat(document.querySelector('#v2').value);
    let res = parseFloat(v1*v2);

    document.querySelector('#resultado3').innerHTML= "O resultado da multiplicação é: " + res;
}

//4ª Questão
function obterDia(){
    let n = parseInt(document.querySelector('#n').value);
    switch(n) {
        case 1:
            return "Domingo";
        case 2:
            return "Segunda-feira";
        case 3:
            return "Terça-feira";
        case 4:
            return "Quarta-feira";
        case 5:
            return "Quinta-feira";
        case 6:
            return "Sexta-feira";
        case 7:
            return "Sábado";
        default:
            return "Número inválido. Informe um número de 1 a 7.";
    }
}

function mostrarDia(){
    let nEscolhido = document.getElementById("n").value;
    let resultado4 = document.getElementById("resultado4");
    let dia = obterDia(parseInt(nEscolhido));

    resultado4.textContent = "O dia conrrespondente ao número " + nEscolhido + " é: " + dia;
}

//5ª Questão
function notas(){
    let n1 = parseFloat(document.getElementById("n1").value);
    let n2 = parseFloat(document.getElementById("n2").value);
    let n3 = parseFloat(document.getElementById("n3").value);
    let n4 = parseFloat(document.getElementById("n4").value);
    const media = (n1+n2+n3+n4)/4;

    let result = document.getElementById("resultado5");

    if(media>6){
        result.textContent = "Sua média foi " + media + " , Aprovado!"
    } else{
        result.textContent = "Sua média foi " + media + " , Reprovado!"
    }
}

//Bônus
function verificar(){
    let numero = parseInt(document.getElementById('np').value);
    let res = isPrimo(numero) ? 'É um número primo!' : 'Não é um número primo.';

    document.getElementById('resultado6').innerHTML = res;
}

function isPrimo(numero) {
    if (numero <= 1) return false;
    for (var i = 2; i <= Math.sqrt(numero); i++) {
      if (numero % i === 0) {
        return false;
      }
    }
    return true;
  }