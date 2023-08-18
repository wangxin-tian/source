import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
export declare class UserService {
    private readonly user;
    constructor(user: Repository<User>);
    addUser({ username, password }: {
        username: any;
        password: any;
    }): Promise<User>;
    updateUserRecommendList(recommendIdList: string[], id: any): Promise<import("typeorm").UpdateResult>;
    getUser(where: any): Promise<User>;
}
