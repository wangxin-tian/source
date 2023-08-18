import { Tag } from './../../tag/entities/tag.entity';
export declare class Article {
    id: string;
    title: string;
    tagId: string;
    introduction: string;
    content: string;
    imageSrc: string;
    createTime: Date;
    modiTime: Date;
    tag: Tag;
    publicState: boolean;
    sortValue: number;
}
