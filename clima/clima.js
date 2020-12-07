const axios = require('axios');

const getClima = async(lat, lon) => {
    let apiKey = 'cf8117d58b703e393cfaa0460c9ebb2f';
    const respuesta = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`)

    return respuesta.data.main.temp;
}

module.exports = {
    getClima
}