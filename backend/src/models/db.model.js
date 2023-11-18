import { connect } from 'mongoose';

const connectDB = async () => {
  try {
    const dbUrl = process.env.MONGO_URL;
    await connect(dbUrl);
    console.log('Conexión a MongoDB establecida');
  } catch (error) {
    console.error('Error al conectar a MongoDB:', error.message);
    process.exit(1); // Si hay un error en la conexión, salimos de la aplicación
  }
};

export default connectDB;
