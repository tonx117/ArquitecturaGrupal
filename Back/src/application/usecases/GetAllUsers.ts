import { UserService } from "../../domain/Services/UserService";

export class GetAllUsers {
    private userService: UserService;

    constructor(userService: UserService) {
        this.userService = userService;
    }

    async execute() {
        return await this.userService.getAllUsers();
    }
}
