const { getLugar } = require('./lugar/lugar');
const { getClima } = require('./clima/clima');
require('./lugar/lugar').getLugar;
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

// let lugar = getLugar(argv.direccion)
//     .then(console.log);
// getClima(31.31, -110.94)
//     .then(console.log)
//     .catch(console.log);

const getInfo = async(direccion) => {
    try {
        const lugar = await getLugar(direccion);
        const grados = await getClima(lugar.lat, lugar.lon);
        return `La temperatura de ${lugar.direccion} es de ${grados} celcius`;
    } catch (error) {

        return `No se encontor la temperatura del lugar ${direccion}`;

    }
    // const resultado = getLugar(direccion)
    //     .then(async(resolve) => {
    //         const grados = await getClima(resolve.lat, resolve.lon)
    //             .then((resolve) => {
    //                 return resolve
    //             })
    //             .catch((err) => {
    //                 throw new Error(err);
    //             });
    //         return `La temperatura de ${resolve.direccion} es de ${grados} celcius`;
    //     })
    // return resultado;
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);