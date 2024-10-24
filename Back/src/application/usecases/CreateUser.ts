import { User } from "../../domain/entities/Users";
import { UserServices } from "../../domain/Services/UserService";
import { CreateUserDTO } from "../dto/CreateUserDTO";

export class CreateUser {
    constructor (private useService: UserServices) {}

    execute(data: CreateUserDTO): User {
        const user = new User(0, data.name, data.email, data.password);
        return this.useService.create(user);
    }
    
}