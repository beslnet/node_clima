const axios = require('axios');

const getLugarLatLng = async (direccion) => {
    const encodedUrl = encodeURI(direccion);

    const instance = axios.create({
        baseURL: `https://geocode.xyz/?locate=location?city=${encodedUrl}&auth=675846731716370473554x27118&json=1`,
    });

    const resp = await instance.get();

    if (resp.data.length === 0) {
        throw new Error(`No hay resultados para ${direccion}`);
    }

    const data = resp.data;
    const address = data.standard.city;
    const lat = data.latt;
    const long = data.longt;

    return {
        address,
        lat,
        long
    }
}

module.exports = {
    getLugarLatLng
}

