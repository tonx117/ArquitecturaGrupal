import { UserService } from '../../domain/Services/UserService';
import { CreateUserDTO } from '../dto/CreateUserDTO';

export class UpdateUser {
    private userService: UserService;

    constructor(userService: UserService) {
        this.userService = userService;
    }

    async execute(id: number, data: CreateUserDTO) {
        return await this.userService.updateUser(id, data);
    }
}
