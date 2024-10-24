import { Request, Response } from "express";
import { UserService } from "../../../domain/Services/UserService";
import { CreateUserDTO } from "../../../application/dto/CreateUserDTO";

export class UserController {
  constructor(private userService: UserService) {}

  // Crear usuario
  async createUser(req: Request, res: Response): Promise<Response> {
    const userDTO: CreateUserDTO = req.body;
    const user = await this.userService.createUser(userDTO);
    return res.status(201).json(user);
  }

  // Obtener todos los usuarios
  async getAllUsers(req: Request, res: Response): Promise<Response> {
    const users = await this.userService.getAllUsers();
    return res.status(200).json(users);
  }

  // Obtener usuario por ID
  async getUserById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const user = await this.userService.getUserById(Number(id));
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.status(200).json(user);
  }

  // Actualizar usuario
  async updateUser(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const userDTO: CreateUserDTO = req.body;
    const updatedUser = await this.userService.updateUser(Number(id), userDTO);
    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.status(200).json(updatedUser);
  }

  // Eliminar usuario
  async deleteUser(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const isDeleted = await this.userService.deleteUser(Number(id));
    if (!isDeleted) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.status(204).send();
  }
}
