// Substitua 'YOUR_API_KEY' pela sua chave de API do OpenWeatherMap
const apiKey = '0b33c3d15742b9d7a2a88d21cd891e79';

// Substitua 'Sao%20Paulo' pelo nome da cidade que deseja obter a previsão
const city = 'Peruibe';

const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

async function fetchWeatherData() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        document.getElementById('temperature').textContent = data.main.temp;
        document.getElementById('condition').textContent = data.weather[0].description;
    } catch (error) {
        console.error('Erro ao buscar dados meteorológicos:', error);
    }
}

fetchWeatherData();