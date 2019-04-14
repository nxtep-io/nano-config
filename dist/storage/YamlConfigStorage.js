"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const YAML = require("yaml");
const BaseConfigStorage_1 = require("./BaseConfigStorage");
class YamlConfigStorage extends BaseConfigStorage_1.BaseConfigStorage {
    constructor() {
        super(...arguments);
        this.type = 'YAML';
        this.extension = 'yaml';
    }
    loadSync() {
        const raw = this.readSync();
        return raw ? YAML.parse(raw) : {};
    }
    dump(data, overrideName, overridePath) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.write(YAML.stringify(data), overrideName, overridePath);
        });
    }
}
exports.YamlConfigStorage = YamlConfigStorage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiWWFtbENvbmZpZ1N0b3JhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9saWIvc3RvcmFnZS9ZYW1sQ29uZmlnU3RvcmFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsNkJBQTZCO0FBRTdCLDJEQUF3RDtBQUV4RCxNQUFhLGlCQUFrQixTQUFRLHFDQUFpQjtJQUF4RDs7UUFDVyxTQUFJLEdBQUcsTUFBTSxDQUFDO1FBQ2QsY0FBUyxHQUFHLE1BQU0sQ0FBQztJQVU5QixDQUFDO0lBUlEsUUFBUTtRQUNiLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUM1QixPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ3BDLENBQUM7SUFFWSxJQUFJLENBQUMsSUFBb0IsRUFBRSxZQUFxQixFQUFFLFlBQXFCOztZQUNsRixNQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxZQUFZLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFDckUsQ0FBQztLQUFBO0NBQ0Y7QUFaRCw4Q0FZQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFlBTUwgZnJvbSAneWFtbCc7XG5pbXBvcnQgeyBCYXNlQ29uZmlnRGF0YSB9IGZyb20gXCIuLi9CYXNlQ29uZmlnXCI7XG5pbXBvcnQgeyBCYXNlQ29uZmlnU3RvcmFnZSB9IGZyb20gXCIuL0Jhc2VDb25maWdTdG9yYWdlXCI7XG5cbmV4cG9ydCBjbGFzcyBZYW1sQ29uZmlnU3RvcmFnZSBleHRlbmRzIEJhc2VDb25maWdTdG9yYWdlIHtcbiAgcmVhZG9ubHkgdHlwZSA9ICdZQU1MJztcbiAgcmVhZG9ubHkgZXh0ZW5zaW9uID0gJ3lhbWwnO1xuXG4gIHB1YmxpYyBsb2FkU3luYygpOiBCYXNlQ29uZmlnRGF0YSB7XG4gICAgY29uc3QgcmF3ID0gdGhpcy5yZWFkU3luYygpO1xuICAgIHJldHVybiByYXcgPyBZQU1MLnBhcnNlKHJhdykgOiB7fTtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBkdW1wKGRhdGE6IEJhc2VDb25maWdEYXRhLCBvdmVycmlkZU5hbWU/OiBzdHJpbmcsIG92ZXJyaWRlUGF0aD86IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgIGF3YWl0IHRoaXMud3JpdGUoWUFNTC5zdHJpbmdpZnkoZGF0YSksIG92ZXJyaWRlTmFtZSwgb3ZlcnJpZGVQYXRoKTtcbiAgfVxufSJdfQ==