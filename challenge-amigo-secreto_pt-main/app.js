let listaAmigos = [];



// Adiciona amigo à lista
function adicionarAmigo(){
    let input = document.querySelector('input');
    if(input.value == ''){
        alert("Por favor, insira um nome");
    } else {
        listaAmigos.push(input.value);
        atualizarLista();
        limparInput();
    }
}

// Atualiza a lista na tela
function atualizarLista(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";

    for (let i = 0; i < listaAmigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = listaAmigos[i];
        lista.appendChild(li);
    }
}

// Sorteia um amigo e mostra o resultado
function sortearAmigo(){
    if(listaAmigos.length === 0){
        alert("Adicione um nome para fazer o sorteio");
    } else {
        let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
        let amigoEscolhido = listaAmigos[indiceAleatorio];
        let mostrarEscolhido = document.getElementById('resultado');
        mostrarEscolhido.innerHTML ="O seu amigo secreto sorteado é: " + amigoEscolhido;
        
    }
}

// Limpa o input
function limparInput(){
    let input = document.querySelector('input');
    input.value = '';
}

// Reinicia tudo: lista, input e resultado
function reiniciarJogo(){
    listaAmigos = [];

    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = "";

    limparInput();
    exibirMensagemInicial();
}