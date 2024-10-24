import { UserService } from "../../domain/Services/UserService";

export class DeleteUser {
    private userService: UserService;

    constructor(userService: UserService) {
        this.userService = userService;
    }

    async execute(id: number) {
        return await this.userService.deleteUser(id);
    }
}
