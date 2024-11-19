import { Router, Request, Response } from "express";
import { UserController } from "../controllers/UserController";
import { UserService } from "../../../domain/Services/UserService";
import { UserRepository } from "../../../infrastructure/repositories/UserRepository";

const userRepository = new UserRepository();
const userService = new UserService(userRepository);
const userController = new UserController(userService);

const UserRouter = Router();

const asyncHandler = (fn: Function) => (req: any, res: any, next: any) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

UserRouter.post("/", asyncHandler((req: Request, res: Response) => userController.createUser(req, res)));
UserRouter.get("/", asyncHandler((req: Request, res: Response) => userController.getAllUsers(req, res)));
UserRouter.get("/:id", asyncHandler((req: Request, res: Response) => userController.getUserById(req, res)));
UserRouter.put("/:id", asyncHandler((req: Request, res: Response) => userController.updateUser(req, res)));
UserRouter.delete("/:id", asyncHandler((req: Request, res: Response) => userController.deleteUser(req, res)));

export default UserRouter;
