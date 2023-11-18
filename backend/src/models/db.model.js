import { connect } from "mongoose";

const connectDB = async () => {
  const dbUrl = process.env.MONGO_URL;

  const attemptConnection = async () => {
    try {
      await connect(dbUrl);
      console.log("Conexión a MongoDB establecida");
    } catch (error) {
      console.error("Error al conectar a MongoDB:", error.message);
      console.log("Reintentando conexión a MongoDB...");
      await new Promise((resolve) => setTimeout(resolve, 5000));
      await attemptConnection();
    }
  };

  await attemptConnection();
};

export default connectDB;
