import { Request, Response } from "express";
import { UserModel } from "../models";

const getAllUsers = async (req: Request, res: Response) => {
  try {
    // Trae usuarios
    const users = await UserModel.findAll(); // Obtiene todos los usuarios

    // Verifica si no hay clientes ni conductores
    if (users.length === 0) {
      // Si no hay clientes ni conductores, retorna un mensaje personalizado
      return res.status(200).json({ msg: "No hay usuarios aún" });
    }

    // Si hay usuarios, los retorna en formato JSON
    return res.status(200).json({ users });
  } catch (error) {
    // Maneja cualquier error interno y retorna un mensaje de error
    return res.status(500).json({ msg: "Error interno" });
  }
};

export default { getAllUsers };
