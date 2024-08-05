import { Router } from "express";
import { UserService } from "../services"; // Importa el servicio para obtener clientes y conductores
import ValidJWT from "../middlewares/valid-jwt";

const router = Router();

const { getAllUsers } = UserService;

router.get("/all", ValidJWT, getAllUsers); // Ruta para obtener todos los clientes y conductores

module.exports = router;
