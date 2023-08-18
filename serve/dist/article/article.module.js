"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticleModule = void 0;
const common_1 = require("@nestjs/common");
const article_entity_1 = require("./entities/article.entity");
const article_service_1 = require("./article.service");
const article_controller_1 = require("./article.controller");
const typeorm_1 = require("@nestjs/typeorm");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const path_1 = require("path");
const user_module_1 = require("../user/user.module");
let ArticleModule = exports.ArticleModule = class ArticleModule {
};
exports.ArticleModule = ArticleModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([article_entity_1.Article]),
            platform_express_1.MulterModule.register({
                storage: (0, multer_1.diskStorage)({
                    destination: (0, path_1.join)(__dirname, '../../public/images'),
                    filename: (_, file, callback) => {
                        const fileName = `${file.originalname}`;
                        return callback(null, fileName);
                    },
                }),
            }),
            user_module_1.UserModule,
        ],
        controllers: [article_controller_1.ArticleController],
        providers: [article_service_1.ArticleService],
    })
], ArticleModule);
//# sourceMappingURL=article.module.js.map