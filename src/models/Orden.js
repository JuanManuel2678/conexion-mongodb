import { Schema, Types, model } from "mongoose";
import Producto from "./Product.js";
import Usuario from "./User.js";

const ordenSchema = new Schema({
  fecha: {
    type: Date,
    required: true,
  },
  productos: [
    {
      type: Types.ObjectId,
      required: true,
      ref: Producto,
    }
  ],
  usuario: {
    type: Types.ObjectId,
    required: true,
    ref: Usuario,
  },
});

const Orden = model("Ordene", ordenSchema);

export default Orden;

// mongos toma el nombre que se le asigna al modelo y lo modifica en la collections
// modelo ----------       collection
//  orden                   ordens 