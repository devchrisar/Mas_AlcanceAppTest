/*se estructuro toda la app para dejar este "entry-point" lo mas ligero posible con solo 5 lineas de codigo */
require("dotenv").config();
const Server = require("./config/server");
const app = new Server();
app.listen();
