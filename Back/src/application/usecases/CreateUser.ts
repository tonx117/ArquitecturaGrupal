import { CreateUserDTO } from '../dto/CreateUserDTO';
import { UserService } from '../../domain/Services/UserService';

export class CreateUser {
    private userService: UserService;

    constructor(userService: UserService) {
        this.userService = userService;
    }
<<<<<<< HEAD
=======
<<<<<<< HEAD
    
}
=======
>>>>>>> c434ae5fd687fe24026feedd0ab0a24c99736bbd

    async execute(data: CreateUserDTO) {
        return await this.userService.createUser(data);
    }
}
<<<<<<< HEAD
=======
>>>>>>> 5a69f9cdb1978bbb799a962c38389fe9b52f9751
>>>>>>> c434ae5fd687fe24026feedd0ab0a24c99736bbd
