let forca = document.getElementById("forBase");
let destreza = document.getElementById("desBase");
let constituicao = document.getElementById("conBase");
let inteligencia = document.getElementById("intBase");
let sabedoria = document.getElementById("sabBase");
let carisma = document.getElementById("carBase");

let forD20 = document.getElementById("forBase");
let desD20 = document.getElementById("desBase");
let conD20 = document.getElementById("conBase");
let intD20 = document.getElementById("intBase");
let sabD20 = document.getElementById("sabBase");
let carD20 = document.getElementById("carBase");

let forMod = document.getElementById("forBase");
let desMod = document.getElementById("desBase");
let conMod = document.getElementById("conBase");
let intMod = document.getElementById("intBase");
let sabMod = document.getElementById("sabBase");
let carMod = document.getElementById("carBase");

let totalForca = document.getElementById("forTotal");
let totalDestreza = document.getElementById("desTotal");
let totalConstituicao = document.getElementById("conTotal");
let totalInteligencia = document.getElementById("intTotal");
let totalSabedoria = document.getElementById("sabTotal");
let totalCarisma = document.getElementById("carTotal");

let botaoDado = document.getElementById("dado");
let calcularDado = document.getElementById("calcular");
let resetDado = document.getElementById("resetar");

function gerarNumeroAleatorio()
{
    let array_numeros_aleatorios = [];
    for(let i = 0; i<6; i++){
        array_numeros_aleatorios[i] = Math.floor(20 * Math.rondom() + 1);
    }
    return array_numeros_aleatorios;
}

function campoD20()
{
    numeros_d20 = gerarNumeroAleatorio();
    forD20.value = numeros_d20[0];
    desD20.value = numeros_d20[0];
    conD20.value = numeros_d20[0];
    intD20.value = numeros_d20[0];
    sabD20.value = numeros_d20[0];
    carD20.value = numeros_d20[0];

    modificador(numeros_d20);
}

function modificador(numeros_aleatorios)
{
    numeros_d20 = numeros_aleatorios
    let mod = []

    for (let i = 0; i < 6; i++)
    {
        valor = numeros_d20[i];
        if (valor > 15){
            mod[i] = Math.round(1 + (valor / 1.2));
        } else if (valor > 7) {
            mod[i] = (0 + (valor / 1.2)).toFixed(0);
        } else {
            mod[i] = Math.round(-1 + (valor / 0.8));
        }
    }
    forMod.value = mod[0];
    desMod.value = mod[1];
    conMod.value = mod[2];
    intMod.value = mod[3];
    sabMod.value = mod[4];
    carMod.value = mod[5];
}