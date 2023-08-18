"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppMiddleware = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("./tools/jwt");
let AppMiddleware = exports.AppMiddleware = class AppMiddleware {
    use(req, res, next) {
        console.log(req);
        const token = req.headers['authorization']?.split(' ')[1];
        req._id = false;
        if (token) {
            const payload = (0, jwt_1.verifyToken)(token);
            if (payload) {
                req._id = payload._id;
            }
        }
        next();
    }
};
exports.AppMiddleware = AppMiddleware = __decorate([
    (0, common_1.Injectable)()
], AppMiddleware);
//# sourceMappingURL=app.middleware.js.map