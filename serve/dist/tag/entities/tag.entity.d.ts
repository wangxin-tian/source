import { Article } from 'src/article/entities/article.entity';
export declare class Tag {
    id: string;
    name: string;
    color: string;
    createTime: Date;
    article: Article[];
}
