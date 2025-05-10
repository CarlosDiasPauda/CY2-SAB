function mostrarMensagem(){
    const nome = document.getElementById('nomeMae').value.trim();
    const mensagemDiv = document.getElementById('mensagem');

    if(nome){
        mensagemDiv.innerHTML=`<p class="message">${nome}, você é uma mãe incrivel!</p> `;
    }
    else{
        mensagemDiv.innerHTML=`<p class="warning">Digite o nome da sua mãe para ver a homenagem</p> `;
    }
}