const output = document.getElementById("output");
const colors = ["#191970","#FFD700","#FF0000"];
let colorIndex = 0;

document.getElementById("colorbtn").addEventListener("click", () => {
    colorIndex=(colorIndex+1) % colors.length; document.body.style.backgroundColor = colors[colorIndex]
});

document.getElementById("timebtn").addEventListener("click", () => {
    const now = new Date();
    const hora = now.toLocaleTimeString("pt-BR");
    output.textContent = "Hora atual: " + hora;
});

let clickCount = 0;
const img = document.getElementById("img");
document.getElementById("countbtn").addEventListener("click", () => {
    clickCount++;
    output.textContent = `voce clicou ${clickCount} vezes`;
    if(clickCount >= 20){
        output.textContent = `voce clicou ${clickCount} vezes e voce virou o LordClicker 💀`;
        img.hidden = false;
    }
});