import axios from "axios";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import UserModel from "../models/user.model.js";
import {
  uniqueNamesGenerator,
  names,
  animals,
  colors,
  adjectives,
} from "unique-names-generator";

//? Controlador para visitar el perfil de un usuario
async function getUserById(req, res, next) {
  try {
    const userId = req.params.userId;

    // Obtengo el usuario de la base de datos local
    const userFromDB = await UserModel.findById(userId);

    if (userFromDB) {
      // Devuelvo los datos del usuario sin incluir userId y password
      const {
        userId: _,
        _id,
        __v,
        password,
        ...userData
      } = userFromDB.toObject();
      res.json(userData);
    } else {
      res.status(404).json({ message: "Usuario no encontrado" });
    }
  } catch (error) {
    // Manejo de errores
    console.error("Error:", error.message);
    next(error);
  }
}

// ?Controlador para obtener todos los usuarios
async function getAllUsers(req, res, next) {
  try {
    const searchTerm = req.query.search;

    if (searchTerm) {
      // Si hay un término de búsqueda, realiza la búsqueda por nombre
      const regex = new RegExp(searchTerm, "i"); // con esto se ignoran las mayúsculas y minúsculas
      const usersFromDB = await UserModel.find({ name: regex });
      res.json(usersFromDB);
    } else {
      // Si no hay un término de búsqueda, obtengo todos los usuarios de la API externa
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      const users = response.data;
      res.json(users);
    }
  } catch (error) {
    // Manejo de errores
    if (error.response) {
      // La solicitud fue hecha, pero el servidor respondió con un código de estado que no está en el rango 2xx
      console.error("Server error:", error.response.status);
      console.error("Server error message:", error.response.data);
    } else if (error.request) {
      // La solicitud fue hecha, pero no se recibió ninguna respuesta
      console.error("No response from server:", error.request);
    } else {
      // Algo sucedió en la configuración que desencadenó un error
      console.error("Error:", error.message);
    }
    // Pasa el error al siguiente middleware
    next(error);
  }
}

//? Controlador para registrar un nuevo usuario
async function createUser(req, res, next) {
  console.log("Body received:", req.body);
  const { email, password, name, lastName } = req.body;

  // Genera un nombre y apellido aleatorios si no se proporcionan
  const generatedName = name || generateRandomName();
  const generatedLastName = lastName || generateRandomName();

  try {
    // Verifica si el usuario ya existe en la base de datos
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "El usuario ya existe" });
    }

    // Encripta la contraseña con un salt de 10 rounds
    console.log("Password:", password);
    const hashedPassword = bcrypt.hashSync(password, 10);

    // Crea un nuevo usuario
    const newUser = new UserModel({
      email,
      password: hashedPassword,
      name: generatedName,
      lastName: generatedLastName,
    });

    // Guarda el nuevo usuario en la base de datos y asigna el id del documento de mongo como su userId
    await newUser.save();
    newUser.userId = newUser._id;
    await newUser.save();

    return res.status(201).json({ message: "Usuario registrado exitosamente" });
  } catch (error) {
    console.log("Error al registrar usuario:", error.message);
    return null;
  }
}

//? Controlador para iniciar sesión
async function loginUser(req, res, next) {
  const { email, password } = req.body;

  // Busca al usuario por su correo electrónico
  const user = await UserModel.findOne({ email });

  // Verifica la contraseña
  if (user && bcrypt.compareSync(password, user.password)) {
    // Genera un token JWT que firma con el id del usuario y expira en 1 hora
    const token = jwt.sign({ sub: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    // Devuelve el token en la respuesta para usarlo en las solicitudes posteriores
    return res.status(201).json({ token });
  } else {
    return res.status(401).json({ message: "Credenciales incorrectas" });
  }
}

//? Genera un nombre aleatorio si no se proporciona uno
function generateRandomName() {
  const randomName = uniqueNamesGenerator({
    dictionaries: [colors, animals, adjectives, names],
    separator: " ",
    length: 2,
  });
  return randomName;
}

export { getAllUsers, createUser, loginUser, getUserById };
