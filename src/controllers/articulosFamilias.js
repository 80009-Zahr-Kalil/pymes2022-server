const articulosFamiliasRepository = require("../repositories/articulosFamilias");

const getAll = (req, res) => {
    try {
        const result = articulosFamiliasRepository.getAll();
        
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
        const result = articulosFamiliasRepository.getById(id);

        if(result === undefined) {
            return res.status(404).json({
                msg: "Familia de Articulo no encontrada"
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
