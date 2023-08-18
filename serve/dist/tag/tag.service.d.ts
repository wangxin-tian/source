import { Tag } from './entities/tag.entity';
import { Repository } from 'typeorm';
export declare class TagService {
    private readonly tag;
    constructor(tag: Repository<Tag>);
    addTag({ name, color }: {
        name: any;
        color: any;
    }): Promise<Tag>;
    deleteTag(id: any): Promise<import("typeorm").DeleteResult>;
    updateTag({ id, name, color }: {
        id: any;
        name: any;
        color: any;
    }): Promise<import("typeorm").UpdateResult>;
    getTag(where: any): Promise<Tag>;
    getTagList(): Promise<Tag[]>;
}
