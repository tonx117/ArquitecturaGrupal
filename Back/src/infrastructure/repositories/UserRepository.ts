import { UserModel } from "../orm/models/UserModel";
import { CreateUserDTO } from "../../application/dto/CreateUserDTO";

export class UserRepository {
  async create(userDTO: CreateUserDTO) {
    return await UserModel.create({ ...userDTO });
  }

  async getAll() {
    return await UserModel.findAll();
  }

  async getById(id: number) {
    return await UserModel.findByPk(id);
  }

  async update(id: number, userDTO: CreateUserDTO) {
    const user = await UserModel.findByPk(id);
    if (!user) return null;
    return await user.update(userDTO);
  }

  async delete(id: number) {
    const user = await UserModel.findByPk(id);
    if (!user) return false;
    await user.destroy();
    return true;
  }
}
