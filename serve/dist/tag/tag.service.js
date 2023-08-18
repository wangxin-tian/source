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
exports.TagService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const tag_entity_1 = require("./entities/tag.entity");
const typeorm_2 = require("typeorm");
let TagService = exports.TagService = class TagService {
    constructor(tag) {
        this.tag = tag;
    }
    addTag({ name, color }) {
        const data = new tag_entity_1.Tag();
        data.name = name;
        data.color = color;
        return this.tag.save(data);
    }
    deleteTag(id) {
        return this.tag.delete(id);
    }
    updateTag({ id, name, color }) {
        const data = new tag_entity_1.Tag();
        data.id = id;
        data.name = name;
        data.color = color;
        return this.tag.update(id, data);
    }
    getTag(where) {
        return this.tag.findOne({
            where,
        });
    }
    getTagList() {
        return this.tag.find({
            order: {
                createTime: 'ASC',
            }
        });
    }
};
exports.TagService = TagService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(tag_entity_1.Tag)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TagService);
//# sourceMappingURL=tag.service.js.map