const articulosFamilias = require("../db/articulosFamilias.json");

const getAll = () => {
    let result = articulosFamilias;

    return result;
}

const getById = (id) => {
    const item = articulosFamilias.find(item => 
        item.id == id
    );

    return item;
}

module.exports = {
    getAll,
    getById,
}