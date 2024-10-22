import { User } from "../entities/Users";

export class UserServices {
    private users: User[] = [];
    
    public create(user: User): User {
        this.users.push(user);
        return user;
    }
    
    public list(): User[] {
        return this.users;
    }
    
    public findById(id: number): User | undefined {
        return this.users.find(user => user.id === id);
    }
    
    public findByEmail(email: string): User | undefined {
        return this.users.find(user => user.email === email);
    }
    
    public update(id: number, user: User): User | undefined {
        const userIndex = this.users.findIndex(user => user.id === id);
        if (userIndex === -1) {
        return undefined;
        }
        this.users[userIndex] = user;
        return user;
    }
    
    public delete(id: number): User | undefined {
        const userIndex = this.users.findIndex(user => user.id === id);
        if (userIndex === -1) {
        return undefined;
        }
        const user = this.users[userIndex];
        this.users.splice(userIndex, 1);
        return user;
    }
}