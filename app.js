/*
*
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Jodo do número secreto!';

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Escolha um número entre 1 e 10';
*
*/

// Criando numeros random

let ListaDeNumerosSorteados = [];
let limiteDeNumeros = 100;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

//Funções com paramentro
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag)
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.3});
};

// atribuindo string no HTML
function exibirMessagemInicial() {
    exibirTextoNaTela('h1', 'Jodo do número secreto!');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 100');
}

exibirMessagemInicial();

//Funções sem paramentro
function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mesagemTentativas = `Você descobriu o numero secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mesagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        exibirTextoNaTela('h1', 'Errou!');
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor!');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior!');
        }
        tentativas++;
        limpaCampo()
    }
}

// Funções com  retorno
function gerarNumeroAleatorio() {
    let numerosEscolhido = parseInt(Math.random() * limiteDeNumeros + 1);
    let quantidadeDeElementosNaLista = ListaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == limiteDeNumeros) {
        ListaDeNumerosSorteados = [];
    }

    if (ListaDeNumerosSorteados.includes(numerosEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        ListaDeNumerosSorteados.push(numerosEscolhido);
        console.log(ListaDeNumerosSorteados)
        return numerosEscolhido;
    }
}


function limpaCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limpaCampo();
    tentativas = 1;
    exibirMessagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

//string
//number
//booler