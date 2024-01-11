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
