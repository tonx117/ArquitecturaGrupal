import { Request, Response } from "express";
import { CreateUser } from "../../../application/usecases/CreateUser";
import { UserRepository } from "../../repositories/UserRepository";

export class UserController {
  static async create(req: Request, res: Response) {
    const repository = new UserRepository();
    const createUser = new CreateUser(repository);
    const user = await createUser.execute(req.body);
    res.status(201).json(user);
  }}