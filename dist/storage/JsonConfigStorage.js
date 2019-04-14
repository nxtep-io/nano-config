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
const NanoConfigStorage_1 = require("../NanoConfigStorage");
class JsonConfigStorage extends NanoConfigStorage_1.NanoConfigStorage {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSnNvbkNvbmZpZ1N0b3JhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9saWIvc3RvcmFnZS9Kc29uQ29uZmlnU3RvcmFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ0EsNERBQXlEO0FBRXpELE1BQWEsaUJBQWtCLFNBQVEscUNBQWlCO0lBQXhEOztRQUNXLFNBQUksR0FBRyxNQUFNLENBQUM7UUFDZCxjQUFTLEdBQUcsTUFBTSxDQUFDO0lBVTlCLENBQUM7SUFSUSxRQUFRO1FBQ2IsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzVCLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDcEMsQ0FBQztJQUVZLElBQUksQ0FBQyxJQUFvQixFQUFFLFlBQXFCLEVBQUUsWUFBcUI7O1lBQ2xGLE1BQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEVBQUUsWUFBWSxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBQzlFLENBQUM7S0FBQTtDQUNGO0FBWkQsOENBWUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOYW5vQ29uZmlnRGF0YSB9IGZyb20gXCIuLi9OYW5vQ29uZmlnXCI7XG5pbXBvcnQgeyBOYW5vQ29uZmlnU3RvcmFnZSB9IGZyb20gXCIuLi9OYW5vQ29uZmlnU3RvcmFnZVwiO1xuXG5leHBvcnQgY2xhc3MgSnNvbkNvbmZpZ1N0b3JhZ2UgZXh0ZW5kcyBOYW5vQ29uZmlnU3RvcmFnZSB7XG4gIHJlYWRvbmx5IHR5cGUgPSAnSlNPTic7XG4gIHJlYWRvbmx5IGV4dGVuc2lvbiA9ICdqc29uJztcblxuICBwdWJsaWMgbG9hZFN5bmMoKTogTmFub0NvbmZpZ0RhdGEge1xuICAgIGNvbnN0IHJhdyA9IHRoaXMucmVhZFN5bmMoKTtcbiAgICByZXR1cm4gcmF3ID8gSlNPTi5wYXJzZShyYXcpIDoge307XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgZHVtcChkYXRhOiBOYW5vQ29uZmlnRGF0YSwgb3ZlcnJpZGVOYW1lPzogc3RyaW5nLCBvdmVycmlkZVBhdGg/OiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBhd2FpdCB0aGlzLndyaXRlKEpTT04uc3RyaW5naWZ5KGRhdGEsIG51bGwsIDIpLCBvdmVycmlkZU5hbWUsIG92ZXJyaWRlUGF0aCk7XG4gIH1cbn0iXX0=