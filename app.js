//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];



adicionarAmigo = () => {
    let amigoInput = document.getElementById('amigo');

    if(amigoInput.value == ""){
        alert('Preencha o campo com o nome de um amigo');
    }
    else
    {
        amigos.push(amigoInput.value);
        console.log(amigos);
        console.log(amigos.length)
        amigoInput.value = ''

        atualizarLista();
    }

}

atualizarLista = () => {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    for(let i = 0; i < amigos.length; i++){
        let item = document.createElement('li');
        item.textContent = amigos[i];
        listaAmigos.appendChild(item);
    }
}

sortearAmigo = () => {
    if(amigos.length == 0){
        alert('adicione amigos antes de sortear')
    }
    else{
        guardaValor = Math.random() * amigos.length;
        selecionarValor = amigos[Math.floor(guardaValor)]

        document.getElementById('resultado').innerHTML = `<h1>O seu amigo secreto é: ${selecionarValor}</h1><br>`
    };
    

    console.log(guardaValor)
    console.log(selecionarValor)
}