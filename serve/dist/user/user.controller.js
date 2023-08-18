"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("./user.service");
const bcrypt_1 = require("../tools/bcrypt");
const jwt_1 = require("../tools/jwt");
let UserController = exports.UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    async addUser(body) {
        const { username } = body;
        let { password } = body;
        password = (0, bcrypt_1.encryption)(password);
        const data = await this.userService.getUser({ username });
        if (data)
            return { error: '用户名已存在' };
        return await this.userService.addUser({ username, password });
    }
    async updateUserRecommendList(body) {
        const { id, recommendIdList } = body;
        if (!id)
            return { error: 'id错误' };
        await this.userService.updateUserRecommendList(recommendIdList || [], id);
        const user = await this.userService.getUser({ id });
        return { ...user, token: (0, jwt_1.generateToken)(user.id) };
    }
    async login(body, { _id }) {
        if (_id) {
            const data = await this.userService.getUser({ id: _id });
            if (!data.id)
                return { error: 'token错误' };
            return { ...data, token: (0, jwt_1.generateToken)(data.id) };
        }
        const data = await this.userService.getUser({ username: body.username });
        if (!data)
            return { error: '用户名错误' };
        if ((0, bcrypt_1.verification)(body.password, data.password)) {
            return { ...data, token: (0, jwt_1.generateToken)(data.id) };
        }
        return { error: '密码错误' };
    }
};
__decorate([
    (0, common_1.Post)(''),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "addUser", null);
__decorate([
    (0, common_1.Put)('recommendList'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "updateUserRecommendList", null);
__decorate([
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "login", null);
exports.UserController = UserController = __decorate([
    (0, common_1.Controller)('user'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
//# sourceMappingURL=user.controller.js.map