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
const BaseConfigStorage_1 = require("./BaseConfigStorage");
class JsonConfigStorage extends BaseConfigStorage_1.BaseConfigStorage {
    constructor() {
        super(...arguments);
        this.type = 'JSON';
        this.extension = 'json';
    }
    loadSync() {
        const raw = this.readSync();
        return raw ? JSON.parse(raw) : {};
    }
    dump(data, overrideName, overridePath) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.write(JSON.stringify(data, null, 2), overrideName, overridePath);
        });
    }
}
exports.JsonConfigStorage = JsonConfigStorage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSnNvbkNvbmZpZ1N0b3JhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9saWIvc3RvcmFnZS9Kc29uQ29uZmlnU3RvcmFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ0EsMkRBQXdEO0FBRXhELE1BQWEsaUJBQWtCLFNBQVEscUNBQWlCO0lBQXhEOztRQUNXLFNBQUksR0FBRyxNQUFNLENBQUM7UUFDZCxjQUFTLEdBQUcsTUFBTSxDQUFDO0lBVTlCLENBQUM7SUFSUSxRQUFRO1FBQ2IsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzVCLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDcEMsQ0FBQztJQUVZLElBQUksQ0FBQyxJQUFvQixFQUFFLFlBQXFCLEVBQUUsWUFBcUI7O1lBQ2xGLE1BQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEVBQUUsWUFBWSxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBQzlFLENBQUM7S0FBQTtDQUNGO0FBWkQsOENBWUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCYXNlQ29uZmlnRGF0YSB9IGZyb20gXCIuLi9CYXNlQ29uZmlnXCI7XG5pbXBvcnQgeyBCYXNlQ29uZmlnU3RvcmFnZSB9IGZyb20gXCIuL0Jhc2VDb25maWdTdG9yYWdlXCI7XG5cbmV4cG9ydCBjbGFzcyBKc29uQ29uZmlnU3RvcmFnZSBleHRlbmRzIEJhc2VDb25maWdTdG9yYWdlIHtcbiAgcmVhZG9ubHkgdHlwZSA9ICdKU09OJztcbiAgcmVhZG9ubHkgZXh0ZW5zaW9uID0gJ2pzb24nO1xuXG4gIHB1YmxpYyBsb2FkU3luYygpOiBCYXNlQ29uZmlnRGF0YSB7XG4gICAgY29uc3QgcmF3ID0gdGhpcy5yZWFkU3luYygpO1xuICAgIHJldHVybiByYXcgPyBKU09OLnBhcnNlKHJhdykgOiB7fTtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBkdW1wKGRhdGE6IEJhc2VDb25maWdEYXRhLCBvdmVycmlkZU5hbWU/OiBzdHJpbmcsIG92ZXJyaWRlUGF0aD86IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgIGF3YWl0IHRoaXMud3JpdGUoSlNPTi5zdHJpbmdpZnkoZGF0YSwgbnVsbCwgMiksIG92ZXJyaWRlTmFtZSwgb3ZlcnJpZGVQYXRoKTtcbiAgfVxufSJdfQ==