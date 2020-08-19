const axios = require('axios');
const token = 'TU-TOKEN';

const getClima = async (lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=${token}`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}