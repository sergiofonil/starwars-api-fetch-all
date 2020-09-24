const Axios = require('axios')

const _axios = Axios.create({ baseURL: 'http://swapi.dev/api/starships/' })
const _request = requestObject => _axios.request(requestObject)

const getAirshipsFromStarWars = params => _request({ method: 'GET', params })

module.exports = { getAirshipsFromStarWars }