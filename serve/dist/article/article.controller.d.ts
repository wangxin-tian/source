import { ArticleService } from './article.service';
import { UserService } from 'src/user/user.service';
export declare class ArticleController {
    private readonly articleService;
    private readonly userService;
    constructor(articleService: ArticleService, userService: UserService);
    addArticle(file: any, body: any): Promise<import("./entities/article.entity").Article | {
        error: string;
    }>;
    deleteArticle({ id }: {
        id: any;
    }): Promise<import("typeorm").DeleteResult>;
    updateArticle(file: any, body: any): Promise<import("./entities/article.entity").Article | {
        error: string;
    }>;
    getArticle({ id }: {
        id: any;
    }, { _id }: {
        _id: any;
    }): Promise<import("./entities/article.entity").Article | {
        error: string;
    }>;
    getArticleRecommendList({ recommendIdList, defaultData }: {
        recommendIdList: any;
        defaultData: any;
    }): Promise<import("./entities/article.entity").Article[]>;
    searchArticle(query: any): Promise<{
        count: number;
        articleList: import("./entities/article.entity").Article[];
    }>;
}
