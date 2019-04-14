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
        return JSON.parse(raw);
    }
    dump(data, overrideName, overridePath) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.write(JSON.stringify(data, null, 2), overrideName, overridePath);
        });
    }
}
exports.JsonConfigStorage = JsonConfigStorage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSnNvbkNvbmZpZ1N0b3JhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9saWIvc3RvcmFnZS9Kc29uQ29uZmlnU3RvcmFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ0EsMkRBQXdEO0FBRXhELE1BQWEsaUJBQWtCLFNBQVEscUNBQWlCO0lBQXhEOztRQUNFLFNBQUksR0FBRyxNQUFNLENBQUM7UUFDZCxjQUFTLEdBQUcsTUFBTSxDQUFDO0lBVXJCLENBQUM7SUFSUSxRQUFRO1FBQ2IsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzVCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBRVksSUFBSSxDQUFDLElBQW9CLEVBQUUsWUFBcUIsRUFBRSxZQUFxQjs7WUFDbEYsTUFBTSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsRUFBRSxZQUFZLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFDOUUsQ0FBQztLQUFBO0NBQ0Y7QUFaRCw4Q0FZQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJhc2VDb25maWdEYXRhIH0gZnJvbSBcIi4uL0Jhc2VDb25maWdcIjtcbmltcG9ydCB7IEJhc2VDb25maWdTdG9yYWdlIH0gZnJvbSBcIi4vQmFzZUNvbmZpZ1N0b3JhZ2VcIjtcblxuZXhwb3J0IGNsYXNzIEpzb25Db25maWdTdG9yYWdlIGV4dGVuZHMgQmFzZUNvbmZpZ1N0b3JhZ2Uge1xuICB0eXBlID0gJ0pTT04nO1xuICBleHRlbnNpb24gPSAnanNvbic7XG5cbiAgcHVibGljIGxvYWRTeW5jKCk6IEJhc2VDb25maWdEYXRhIHtcbiAgICBjb25zdCByYXcgPSB0aGlzLnJlYWRTeW5jKCk7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UocmF3KTtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBkdW1wKGRhdGE6IEJhc2VDb25maWdEYXRhLCBvdmVycmlkZU5hbWU/OiBzdHJpbmcsIG92ZXJyaWRlUGF0aD86IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgIGF3YWl0IHRoaXMud3JpdGUoSlNPTi5zdHJpbmdpZnkoZGF0YSwgbnVsbCwgMiksIG92ZXJyaWRlTmFtZSwgb3ZlcnJpZGVQYXRoKTtcbiAgfVxufSJdfQ==