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
exports.ArticleService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const article_entity_1 = require("./entities/article.entity");
let ArticleService = exports.ArticleService = class ArticleService {
    constructor(article) {
        this.article = article;
    }
    addArticle(article) {
        const data = createArticle(article);
        return this.article.save(data);
    }
    deleteArticle(id) {
        return this.article.delete(id);
    }
    updateArticle(id, article) {
        const data = createArticle(article);
        return this.article.update(id, data);
    }
    getArticle(where) {
        return this.article.findOne({
            where,
            relations: ['tag'],
        });
    }
    getArticleList(where) {
        return this.article.find({
            select: [
                'createTime',
                'id',
                'imageSrc',
                'introduction',
                'modiTime',
                'tag',
                'tagId',
                'title',
                'publicState',
            ],
            where,
            relations: ['tag'],
        });
    }
    searchArticleList({ skip, take, kw, order }) {
        return this.article
            .createQueryBuilder('article')
            .leftJoinAndSelect('article.tag', 'tag')
            .select([
            'article.createTime',
            'article.id',
            'article.imageSrc',
            'article.introduction',
            'article.modiTime',
            'article.tagId',
            'article.title',
            'article.publicState',
            'tag',
        ])
            .where('article.title like :kw', { kw: `%${kw}%` })
            .orWhere('article.introduction like :kw', { kw: `%${kw}%` })
            .orWhere('article.content like :kw', { kw: `%${kw}%` })
            .orWhere('tag.name like :kw', { kw: `%${kw}%` })
            .orderBy('article.createTime', order)
            .skip(skip)
            .take(take)
            .getMany();
    }
    searchArticleListCount({ kw }) {
        return this.article
            .createQueryBuilder('article')
            .leftJoinAndSelect('article.tag', 'tag')
            .where('article.title like :kw', { kw: `%${kw}%` })
            .orWhere('article.introduction like :kw', { kw: `%${kw}%` })
            .orWhere('article.content like :kw', { kw: `%${kw}%` })
            .orWhere('tag.name like :kw', { kw: `%${kw}%` })
            .getCount();
    }
};
exports.ArticleService = ArticleService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(article_entity_1.Article)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ArticleService);
const createArticle = ({ title, tagId, introduction, content, createTime, modiTime, publicState, filename, }) => {
    const data = new article_entity_1.Article();
    data.title = title;
    data.tagId = tagId;
    data.introduction = introduction;
    data.content = content;
    data.createTime = createTime;
    data.modiTime = modiTime;
    data.publicState = publicState;
    if (filename) {
        data.imageSrc = filename;
    }
    return data;
};
//# sourceMappingURL=article.service.js.map