const axios = require('axios');
const { Dirent } = require('fs');



const getLugar = async(dir) => {
    let ciudad = dir.replace(' ', "+");
    let apiKey = 'cf8117d58b703e393cfaa0460c9ebb2f';


    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}`)
        // .then(function(response) {
        //     // handle success
        //     console.log(response.data);
        // })
        // .catch(function(error) {
        //     // handle error
        //     console.log(error);
        // })
    if (resp.data.length === 0) {
        throw new Error(`No hay resulatodos para esa ${dir}`);
    }
    const data = resp.data;
    const direccion = data.name;
    const lat = data.coord.lat;
    const lon = data.coord.lon;
    return {
        direccion,
        lat,
        lon

    }
}

module.exports = {
    getLugar
}