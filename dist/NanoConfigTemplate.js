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
const NanoConfig_1 = require("./NanoConfig");
class NanoConfigTemplate extends NanoConfig_1.NanoConfig {
    dump(overrideName, overridePath) {
        return __awaiter(this, void 0, void 0, function* () {
            const rendered = yield this.render();
            yield this.storage.dump(rendered, overrideName, overridePath);
        });
    }
}
exports.NanoConfigTemplate = NanoConfigTemplate;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTmFub0NvbmZpZ1RlbXBsYXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vbGliL05hbm9Db25maWdUZW1wbGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsNkNBQTBEO0FBRTFELE1BQXNCLGtCQUFnRCxTQUFRLHVCQUFVO0lBSXpFLElBQUksQ0FBQyxZQUFxQixFQUFFLFlBQXFCOztZQUM1RCxNQUFNLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUNyQyxNQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxZQUFZLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFDaEUsQ0FBQztLQUFBO0NBQ0Y7QUFSRCxnREFRQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5hbm9Db25maWdEYXRhLCBOYW5vQ29uZmlnIH0gZnJvbSBcIi4vTmFub0NvbmZpZ1wiO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgTmFub0NvbmZpZ1RlbXBsYXRlPERhdGEgZXh0ZW5kcyBOYW5vQ29uZmlnRGF0YT4gZXh0ZW5kcyBOYW5vQ29uZmlnIHtcblxuICBwcm90ZWN0ZWQgYWJzdHJhY3QgYXN5bmMgcmVuZGVyKCk6IFByb21pc2U8RGF0YT47XG5cbiAgcHVibGljIGFzeW5jIGR1bXAob3ZlcnJpZGVOYW1lPzogc3RyaW5nLCBvdmVycmlkZVBhdGg/OiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCByZW5kZXJlZCA9IGF3YWl0IHRoaXMucmVuZGVyKCk7XG4gICAgYXdhaXQgdGhpcy5zdG9yYWdlLmR1bXAocmVuZGVyZWQsIG92ZXJyaWRlTmFtZSwgb3ZlcnJpZGVQYXRoKTtcbiAgfVxufSJdfQ==