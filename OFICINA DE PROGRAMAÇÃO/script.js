let numeroSecreto = gerarNumero();
let tentativas = 0;

function gerarNumero() {
    return Math.floor(Math.random() * 100) + 1;
}

function verificarPalpite() {

    const input = document.getElementById("palpite");
    const mensagem = document.getElementById("mensagem");

    const valor = Number(input.value);

    if (!valor || valor < 1 || valor > 100) {
        mensagem.innerHTML = "Digite um número entre 1 e 100.";
        return;
    }

    tentativas++;

    document.getElementById("tentativas").innerHTML =
        "Tentativas: " + tentativas;

    if (valor === numeroSecreto) {

        mensagem.innerHTML =
            `🎉 Parabéns! Você acertou em ${tentativas} tentativas.`;

        mensagem.style.color = "green";

    } else if (valor < numeroSecreto) {

        mensagem.innerHTML =
            "📈 O número secreto é maior.";

        mensagem.style.color = "orange";

    } else {

        mensagem.innerHTML =
            "📉 O número secreto é menor.";

        mensagem.style.color = "red";
    }

    input.value = "";
    input.focus();
}

function reiniciarJogo() {

    numeroSecreto = gerarNumero();
    tentativas = 0;

    document.getElementById("mensagem").innerHTML = "";
    document.getElementById("tentativas").innerHTML =
        "Tentativas: 0";

    document.getElementById("palpite").value = "";
}