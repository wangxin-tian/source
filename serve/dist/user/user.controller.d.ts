import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    addUser(body: any): Promise<import("./entities/user.entity").User | {
        error: string;
    }>;
    updateUserRecommendList(body: any): Promise<{
        error: string;
    } | {
        token: string;
        id: number;
        recommendIdList: string[];
        username: string;
        password: string;
        createTime: Date;
        error?: undefined;
    }>;
    login(body: any, { _id }: {
        _id: any;
    }): Promise<{
        error: string;
    } | {
        token: string;
        id: number;
        recommendIdList: string[];
        username: string;
        password: string;
        createTime: Date;
        error?: undefined;
    }>;
}
