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
const NanoConfigStorage_1 = require("../NanoConfigStorage");
class YamlConfigStorage extends NanoConfigStorage_1.NanoConfigStorage {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiWWFtbENvbmZpZ1N0b3JhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9saWIvc3RvcmFnZS9ZYW1sQ29uZmlnU3RvcmFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsNkJBQTZCO0FBRTdCLDREQUF5RDtBQUV6RCxNQUFhLGlCQUFrQixTQUFRLHFDQUFpQjtJQUF4RDs7UUFDVyxTQUFJLEdBQUcsTUFBTSxDQUFDO1FBQ2QsY0FBUyxHQUFHLE1BQU0sQ0FBQztJQVU5QixDQUFDO0lBUlEsUUFBUTtRQUNiLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUM1QixPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ3BDLENBQUM7SUFFWSxJQUFJLENBQUMsSUFBb0IsRUFBRSxZQUFxQixFQUFFLFlBQXFCOztZQUNsRixNQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxZQUFZLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFDckUsQ0FBQztLQUFBO0NBQ0Y7QUFaRCw4Q0FZQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFlBTUwgZnJvbSAneWFtbCc7XG5pbXBvcnQgeyBOYW5vQ29uZmlnRGF0YSB9IGZyb20gXCIuLi9OYW5vQ29uZmlnXCI7XG5pbXBvcnQgeyBOYW5vQ29uZmlnU3RvcmFnZSB9IGZyb20gXCIuLi9OYW5vQ29uZmlnU3RvcmFnZVwiO1xuXG5leHBvcnQgY2xhc3MgWWFtbENvbmZpZ1N0b3JhZ2UgZXh0ZW5kcyBOYW5vQ29uZmlnU3RvcmFnZSB7XG4gIHJlYWRvbmx5IHR5cGUgPSAnWUFNTCc7XG4gIHJlYWRvbmx5IGV4dGVuc2lvbiA9ICd5YW1sJztcblxuICBwdWJsaWMgbG9hZFN5bmMoKTogTmFub0NvbmZpZ0RhdGEge1xuICAgIGNvbnN0IHJhdyA9IHRoaXMucmVhZFN5bmMoKTtcbiAgICByZXR1cm4gcmF3ID8gWUFNTC5wYXJzZShyYXcpIDoge307XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgZHVtcChkYXRhOiBOYW5vQ29uZmlnRGF0YSwgb3ZlcnJpZGVOYW1lPzogc3RyaW5nLCBvdmVycmlkZVBhdGg/OiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBhd2FpdCB0aGlzLndyaXRlKFlBTUwuc3RyaW5naWZ5KGRhdGEpLCBvdmVycmlkZU5hbWUsIG92ZXJyaWRlUGF0aCk7XG4gIH1cbn0iXX0=