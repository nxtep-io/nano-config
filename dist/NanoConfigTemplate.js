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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTmFub0NvbmZpZ1RlbXBsYXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vbGliL05hbm9Db25maWdUZW1wbGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsNkNBQTZFO0FBRTdFLE1BQXNCLGtCQUFnRSxTQUFRLHVCQUFnQjtJQUsvRixJQUFJLENBQUMsWUFBcUIsRUFBRSxZQUFxQjs7WUFDNUQsTUFBTSxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDckMsTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsWUFBWSxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBQ2hFLENBQUM7S0FBQTtDQUNGO0FBVEQsZ0RBU0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOYW5vQ29uZmlnRGF0YSwgTmFub0NvbmZpZywgTmFub0NvbmZpZ09wdGlvbnMgfSBmcm9tIFwiLi9OYW5vQ29uZmlnXCI7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBOYW5vQ29uZmlnVGVtcGxhdGU8RGF0YSBleHRlbmRzIE5hbm9Db25maWdEYXRhLCBUZW1wbGF0ZSA9IGFueT4gZXh0ZW5kcyBOYW5vQ29uZmlnPERhdGE+IHtcbiAgcHVibGljIG9wdGlvbnM6IE5hbm9Db25maWdPcHRpb25zPERhdGE+O1xuXG4gIHByb3RlY3RlZCBhYnN0cmFjdCBhc3luYyByZW5kZXIoKTogUHJvbWlzZTxUZW1wbGF0ZT47XG5cbiAgcHVibGljIGFzeW5jIGR1bXAob3ZlcnJpZGVOYW1lPzogc3RyaW5nLCBvdmVycmlkZVBhdGg/OiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCByZW5kZXJlZCA9IGF3YWl0IHRoaXMucmVuZGVyKCk7XG4gICAgYXdhaXQgdGhpcy5zdG9yYWdlLmR1bXAocmVuZGVyZWQsIG92ZXJyaWRlTmFtZSwgb3ZlcnJpZGVQYXRoKTtcbiAgfVxufSJdfQ==