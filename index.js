const { getAirshipsFromStarWars } = require('./api')

const getAllAirships = async (index = 1) => {
    const { data: { next, results } } = await getAirshipsFromStarWars({ page: index })

    return next ? [...results, ...(await getAllAirships(index + 1))] : results
}

// Mostra o tamanho total de 36 itens
getAllAirships().then(response => console.log(response.length))