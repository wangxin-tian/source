import { FindOptionsWhere, Repository } from 'typeorm';
import { Article } from './entities/article.entity';
export declare class ArticleService {
    private readonly article;
    constructor(article: Repository<Article>);
    addArticle(article: any): Promise<Article>;
    deleteArticle(id: string): Promise<import("typeorm").DeleteResult>;
    updateArticle(id: any, article: any): Promise<import("typeorm").UpdateResult>;
    getArticle(where: FindOptionsWhere<Article> | FindOptionsWhere<Article>[]): Promise<Article>;
    getArticleList(where: FindOptionsWhere<Article> | FindOptionsWhere<Article>[]): Promise<Article[]>;
    searchArticleList({ skip, take, kw, order }: {
        skip: any;
        take: any;
        kw: any;
        order: any;
    }): Promise<Article[]>;
    searchArticleListCount({ kw }: {
        kw: any;
    }): Promise<number>;
}
