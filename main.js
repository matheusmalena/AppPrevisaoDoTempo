
const apiKey = "a5a6be5a8e408b5ac809f8e8159a2d63"

function CliqueiNoBotao() {
    const cidade = document.querySelector(".input-cidade").value
    buscarCidade(cidade)
}

async function buscarCidade(cidade) {
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}&lang=pt_br&units=metric`).then(resposta => resposta.json())
    //dadosNaTela(dados)
    colocarDadosnaTela(dados)
}

function colocarDadosnaTela(dados) {
    document.querySelector(".titulo").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "C°"
    document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description
    document.querySelector(".img-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
    document.querySelector(".umidade").innerHTML = "Umidade: " + dados.main.humidity + "%"

}

/*function dadosNaTela(dados){
    console.log(dados)
    const dadosNaTela = document.getElementById("dadosNaTela")
    document.querySelector(".titulo").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "C°"
    document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description
    document.querySelector(".img-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
    document.querySelector(".umidade").innerHTML = "Umidade: " + dados.main.humidity + "%"
    
}*/

document.addEventListener("DOMContentLoaded", function () {
    const botao = document.querySelector("#botao");
    const desenvolvedor = document.querySelector(".desenvolvedor");
    const rodape = document.querySelector(".rodape");
    const caixaRedesSociais = document.querySelector(".caixa-redes-sociais");
    const instagram = document.querySelector(".redes-sociais-instagram");
    const linkedin = document.querySelector(".redes-sociais-linkedin");
    const git = document.querySelector(".redes-sociais-git");

    botao.addEventListener("change", function () {
        if (botao.checked) {
            document.body.style.background = "linear-gradient(#14385b, #000000)";
            desenvolvedor.style.color = "#ffffff";
            instagram.src = "fotos/instagram-branco.png";
            git.src = "fotos/git-branco.png";
            git.style.width = "25px";
            git.style.height = "25px";
            linkedin.src = "fotos/linkedin-branco.png";
            linkedin.style.width = "25px";
            linkedin.style.height = "25px";
            rodape.style.gap = "5px";
            
            
        } else {
            document.body.style.background = "linear-gradient(#030364, #b8b8b8)";
            desenvolvedor.style.color = "#000000";
            instagram.src = "fotos/instagram.png"
            git.src = "fotos/git.png"
            linkedin.src = "fotos/linkedin.png"
            git.style.width = "42px";
            git.style.height = "42px";
            linkedin.style.width = "28px";
            linkedin.style.height = "28px";
            rodape.style.gap = "5px";
            caixaRedesSociais.gap = "10px";
        }
    });

});



