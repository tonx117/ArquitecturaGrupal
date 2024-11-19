import { UserService } from "../../domain/Services/UserService";

export class GetUserById {
    private userService: UserService;

    constructor(userService: UserService) {
        this.userService = userService;
    }

    async execute(id: number) {
        return await this.userService.getUserById(id);
    }
}
