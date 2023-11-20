import RequestModel from "../src/models/audit.model.js";

//? Función para capturar la respuesta de la solicitud
const captureResponseData = async (req, res) => {
  try {
    if (res?.locals?.responseData) {
      //? si hay un objeto res y contiene un objeto locals con un objeto responseData, captura la respuesta de la solicitud
      return await res.locals.responseData;
    }
    if (res?.hasOwnProperty("body")) {
      //? si la solicitud contiene un cuerpo, captura la respuesta de la solicitud
      return await res.body;
    }
    //? si no hay respuesta, retorna un objeto vacío
    return {};
  } catch (error) {
    console.error("Error al capturar la respuesta:", error.message);
    return {};
  }
};

const requestLogger = async (req, res, next) => {
  try {
    const { method, originalUrl, body } = req;

    //? Captura la respuesta antes de continuar con la ejecución de la solicitud
    const responseData = await captureResponseData(req, res);

    //? Obtiene el id del usuario si está presente
    const userId = req.user ? req.user.id : null;

    //? Crea un nuevo registro en la base de datos con la información de la solicitud
    await RequestModel.create({
      date: new Date(),
      method,
      endpoint: originalUrl,
      requestData: body,
      responseData,
      userId,
    });

    //? Continúa con la ejecución de la solicitud
    next();
  } catch (error) {
    next(error);
  }
};

export default requestLogger;
