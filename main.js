
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