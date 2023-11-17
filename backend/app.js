/*se estructuro toda la app para dejar este "entry-point" lo mas ligero posible con solo 5 lineas de codigo */
import dotenv from "dotenv";
import Server from "./config/server.js";
dotenv.config();
const app = new Server();
app.listen();
