const articulos = require("../db/articulos.json");

const getAll = () => {
    let result = articulos;

    return result;
}

const getById = (id) => {
    const item = articulos.find(item => 
        item.id == id
    );

    return item;
}

module.exports = {
    getAll,
    getById,
}