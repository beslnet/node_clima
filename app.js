const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');



const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;


// const coordenadas = lugar.getLugarLatLng(argv.direccion);

// clima.getClima(-0.13, 51.51)
//     .then(console.log)
//     .catch(console.log);

const getInfo = async (direccion) => {

    try {
        const coords = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coords.lat, coords.long);
        return `Èl clima de ${coords.address} es de ${temp}`;

    } catch (error) {
        return `No se pudo determinar el clima de ${direccion}`;
    }

}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);