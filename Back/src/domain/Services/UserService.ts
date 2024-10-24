import { UserRepository } from "../../infrastructure/repositories/UserRepository";
import { CreateUserDTO } from "../../application/dto/CreateUserDTO";

export class UserService {
  constructor(private userRepository: UserRepository) {}

  async createUser(userDTO: CreateUserDTO) {
    return this.userRepository.create(userDTO);
  }

  async getAllUsers() {
    return this.userRepository.getAll();
  }

  async getUserById(id: number) {
    return this.userRepository.getById(id);
  }

  async updateUser(id: number, userDTO: CreateUserDTO) {
    return this.userRepository.update(id, userDTO);
  }

  async deleteUser(id: number) {
    return this.userRepository.delete(id);
  }
}
