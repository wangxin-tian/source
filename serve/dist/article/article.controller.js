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
exports.ArticleController = void 0;
const common_1 = require("@nestjs/common");
const article_service_1 = require("./article.service");
const user_service_1 = require("../user/user.service");
const platform_express_1 = require("@nestjs/platform-express");
const typeorm_1 = require("typeorm");
let ArticleController = exports.ArticleController = class ArticleController {
    constructor(articleService, userService) {
        this.articleService = articleService;
        this.userService = userService;
    }
    async addArticle(file, body) {
        const article = JSON.parse(body.article);
        if (article.content.length > 15360)
            return { error: '文章长度超出' };
        const data = await this.articleService.getArticle({
            title: article.title,
        });
        if (data)
            return { error: '存在相同标题的文章' };
        article.createTime = new Date(article.createTime);
        article.modiTime = new Date(article.modiTime);
        return this.articleService.addArticle({
            filename: file.filename,
            ...article,
        });
    }
    async deleteArticle({ id }) {
        return await this.articleService.deleteArticle(id);
    }
    async updateArticle(file, body) {
        const article = JSON.parse(body.article);
        if (article.content.length > 15360)
            return { error: '文章长度超出' };
        const id = article.id;
        const data = await this.articleService.getArticle({
            title: article.title,
            id: (0, typeorm_1.Not)(id),
        });
        if (data)
            return { error: '存在相同标题的文章' };
        if (!id)
            return { error: '没有id' };
        article.createTime = new Date(article.createTime);
        article.modiTime = new Date(article.modiTime);
        this.articleService.updateArticle(id, {
            ...article,
            filename: file?.filename || null,
        });
        return await this.articleService.getArticle({ id });
    }
    async getArticle({ id }, { _id }) {
        const res = await this.articleService.getArticle({ id });
        if (!res)
            return { error: '数据加载错误，可能是个无效的id' };
        if (!_id && !res.publicState) {
            return { error: '私有文章，无法查看' };
        }
        return res;
    }
    async getArticleRecommendList({ recommendIdList, defaultData }) {
        if (!recommendIdList.length) {
            const user = await this.userService.getUser({});
            recommendIdList = user?.recommendIdList;
        }
        let res = await this.articleService.getArticleList({
            id: (0, typeorm_1.In)(recommendIdList || []),
        });
        if (res.length) {
            res.forEach((item) => {
                item.sortValue = recommendIdList.indexOf(item.id);
            });
            res = res.sort((a, b) => a.sortValue - b.sortValue);
            return res;
        }
        if (!defaultData)
            return [];
        return this.articleService.searchArticleList({
            kw: '',
            order: 'DESC',
            skip: 0,
            take: 10,
        });
    }
    async searchArticle(query) {
        const defaultQuery = { kw: '', order: 'DESC', skip: 0, take: 20 };
        const finalQuery = {
            ...defaultQuery,
            ...query,
        };
        const count = await this.articleService.searchArticleListCount(finalQuery);
        if (count === 0)
            return { count, articleList: [] };
        const articleList = await this.articleService.searchArticleList(finalQuery);
        return { count, articleList };
    }
};
__decorate([
    (0, common_1.Post)(''),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ArticleController.prototype, "addArticle", null);
__decorate([
    (0, common_1.Delete)(''),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ArticleController.prototype, "deleteArticle", null);
__decorate([
    (0, common_1.Put)(''),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ArticleController.prototype, "updateArticle", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ArticleController.prototype, "getArticle", null);
__decorate([
    (0, common_1.Post)('recommendList'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ArticleController.prototype, "getArticleRecommendList", null);
__decorate([
    (0, common_1.Get)(''),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ArticleController.prototype, "searchArticle", null);
exports.ArticleController = ArticleController = __decorate([
    (0, common_1.Controller)('article'),
    __metadata("design:paramtypes", [article_service_1.ArticleService,
        user_service_1.UserService])
], ArticleController);
//# sourceMappingURL=article.controller.js.map