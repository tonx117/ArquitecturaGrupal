import { CreateUserDTO } from '../dto/CreateUserDTO';
import { UserService } from '../../domain/Services/UserService';

export class CreateUser {
    private userService: UserService;

    constructor(userService: UserService) {
        this.userService = userService;
    }
<<<<<<< HEAD
    
}
=======

    async execute(data: CreateUserDTO) {
        return await this.userService.createUser(data);
    }
}
>>>>>>> 5a69f9cdb1978bbb799a962c38389fe9b52f9751
