import Orden from "../models/Orden.js"


class OrdenController {

    static async index (req, res) {
        const ordenes = await Orden.find().populate('usuario productos','-password')
        res.json(ordenes)
    }
}

export default OrdenController

//.populate trae los datos dl id que esta entre comillas 
//-password para eliminar la información de un usuario se una el -