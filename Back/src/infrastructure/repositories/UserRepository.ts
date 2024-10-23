import { UserModel } from "../orm/models/UserModel";
import { User } from "../../domain/entities/Users";

export class UserRepository {
  async create(user: User): Promise<User> {
    const newUser = await UserModel.create(user);
    return newUser.toJSON() as User;
  }}