const articulosRepository = require("../repositories/articulos");

const getAll = (req, res) => {
    try {
        const result = articulosRepository.getAll();
        
        return res.status(200).json(result);
    }
    catch(err) {
        return res.status(500).json({
            msg: "Internal Server Error"
        })
    }
}

const getById = (req, res) => {
    try {
        const id = req.params.id;
        const result = articulosRepository.getById(id);

        if(result === undefined) {
            return res.status(404).json({
                msg: "Articulo no encontrado"
            })
        }

        return res.status(200).json(result);
    }
    catch(err) {
        return res.status(500).json({
            msg: "Internal Server Error"
        })
    }
}

module.exports = {
    getAll,
    getById,
}
