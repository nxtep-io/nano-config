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
const dotenv = require("dotenv");
const NanoConfigStorage_1 = require("../NanoConfigStorage");
class EnvConfigStorage extends NanoConfigStorage_1.NanoConfigStorage {
    constructor() {
        super(...arguments);
        this.type = 'ENV';
        this.extension = 'env';
    }
    loadSync() {
        const raw = this.readSync();
        return raw ? dotenv.parse(raw) : {};
    }
    dump(data, overrideName, overridePath) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = [];
            for (const key in data) {
                const line = `${key}=${String(data[key])}`;
                result.push(line);
            }
            yield this.write(result.join('\n'), overrideName, overridePath);
        });
    }
}
exports.EnvConfigStorage = EnvConfigStorage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW52Q29uZmlnU3RvcmFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9zdG9yYWdlL0VudkNvbmZpZ1N0b3JhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLGlDQUFpQztBQUVqQyw0REFBeUQ7QUFFekQsTUFBYSxnQkFBaUIsU0FBUSxxQ0FBaUI7SUFBdkQ7O1FBQ1csU0FBSSxHQUFHLEtBQUssQ0FBQztRQUNiLGNBQVMsR0FBRyxLQUFLLENBQUM7SUFpQjdCLENBQUM7SUFmUSxRQUFRO1FBQ2IsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzVCLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDdEMsQ0FBQztJQUVZLElBQUksQ0FBQyxJQUFvQixFQUFFLFlBQXFCLEVBQUUsWUFBcUI7O1lBQ2xGLE1BQU0sTUFBTSxHQUFhLEVBQUUsQ0FBQTtZQUUzQixLQUFLLE1BQU0sR0FBRyxJQUFJLElBQUksRUFBRTtnQkFDdEIsTUFBTSxJQUFJLEdBQUcsR0FBRyxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUE7Z0JBQzFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDbkI7WUFFRCxNQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxZQUFZLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFDbEUsQ0FBQztLQUFBO0NBQ0Y7QUFuQkQsNENBbUJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZG90ZW52IGZyb20gJ2RvdGVudic7XG5pbXBvcnQgeyBOYW5vQ29uZmlnRGF0YSB9IGZyb20gXCIuLi9OYW5vQ29uZmlnXCI7XG5pbXBvcnQgeyBOYW5vQ29uZmlnU3RvcmFnZSB9IGZyb20gXCIuLi9OYW5vQ29uZmlnU3RvcmFnZVwiO1xuXG5leHBvcnQgY2xhc3MgRW52Q29uZmlnU3RvcmFnZSBleHRlbmRzIE5hbm9Db25maWdTdG9yYWdlIHtcbiAgcmVhZG9ubHkgdHlwZSA9ICdFTlYnO1xuICByZWFkb25seSBleHRlbnNpb24gPSAnZW52JztcblxuICBwdWJsaWMgbG9hZFN5bmMoKTogTmFub0NvbmZpZ0RhdGEge1xuICAgIGNvbnN0IHJhdyA9IHRoaXMucmVhZFN5bmMoKTtcbiAgICByZXR1cm4gcmF3ID8gZG90ZW52LnBhcnNlKHJhdykgOiB7fTtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBkdW1wKGRhdGE6IE5hbm9Db25maWdEYXRhLCBvdmVycmlkZU5hbWU/OiBzdHJpbmcsIG92ZXJyaWRlUGF0aD86IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IHJlc3VsdDogc3RyaW5nW10gPSBbXVxuXG4gICAgZm9yIChjb25zdCBrZXkgaW4gZGF0YSkge1xuICAgICAgY29uc3QgbGluZSA9IGAke2tleX09JHtTdHJpbmcoZGF0YVtrZXldKX1gXG4gICAgICByZXN1bHQucHVzaChsaW5lKTtcbiAgICB9XG5cbiAgICBhd2FpdCB0aGlzLndyaXRlKHJlc3VsdC5qb2luKCdcXG4nKSwgb3ZlcnJpZGVOYW1lLCBvdmVycmlkZVBhdGgpO1xuICB9XG59Il19