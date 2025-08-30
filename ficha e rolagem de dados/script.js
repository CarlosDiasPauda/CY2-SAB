function mostrarAlerta(){
    alert("Olá, você foi alertado.")
}

function somar(){
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let soma = num1 + num2
    document.getElementById("resultado").innerText = "Resultado: " + soma;
}
function subtrair(){
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let subtracao = num1 - num2
    document.getElementById("resultado").innerText = "Resultado: " + subtracao;
}
function multiplicar(){
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let multiplicacao = num1 * num2
    document.getElementById("resultado").innerText = "Resultado: " + multiplicacao;
}
function dividir(){
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let divisao = num1 / num2
    document.getElementById("resultado").innerText = "Resultado: " + divisao;
}

function mudarCor(){
    document.body.style.color.backgroundColor = "rebeccapurple";
}

let cliques = 0;

function somarClicks(){
    cliques++;
    document.getElementById("somarC").innerText = "Cliques: " + cliques;
}