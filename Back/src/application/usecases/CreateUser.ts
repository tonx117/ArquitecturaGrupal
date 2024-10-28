import { CreateUserDTO } from '../dto/CreateUserDTO';
import { UserService } from '../../domain/Services/UserService';

export class CreateUser {
    private userService: UserService;

    constructor(userService: UserService) {
        this.userService = userService;
    }

    async execute(data: CreateUserDTO) {
        return await this.userService.createUser(data);
    }
}
