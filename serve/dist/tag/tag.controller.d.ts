import { TagService } from './tag.service';
export declare class TagController {
    private readonly tagService;
    constructor(tagService: TagService);
    addTag(body: any): Promise<import("./entities/tag.entity").Tag | {
        error: string;
    }>;
    deleteTag(body: any): Promise<import("typeorm").DeleteResult>;
    updateTag(body: any): Promise<import("typeorm").UpdateResult>;
    getTagList(): Promise<import("./entities/tag.entity").Tag[]>;
}
