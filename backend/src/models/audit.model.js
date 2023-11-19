import { Schema, model } from "mongoose";

const requestSchema = new Schema({
  date: { type: Date, default: Date.now }, // Fecha de la petición
  method: String, // Método de la petición (GET, POST, etc.)
  endpoint: String, // Ruta o endpoint de la petición
  responseData: Object, // Datos de respuesta de la petición
  requestData: Object, // Datos de la petición
  userId: String, // Id del usuario que realizó la petición
});

// Índice para mejorar la búsqueda por fecha
requestSchema.index({ date: 1 });

const RequestModel = model("Request", requestSchema);

export default RequestModel;
