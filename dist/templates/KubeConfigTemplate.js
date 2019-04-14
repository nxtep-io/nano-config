"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const NanoConfigTemplate_1 = require("../NanoConfigTemplate");
class KubeConfigTemplate extends NanoConfigTemplate_1.NanoConfigTemplate {
    static environment(options) {
        return super.environment(options);
    }
    render() {
        return __awaiter(this, void 0, void 0, function* () {
            const _a = this.options, { kind = 'ConfigMap', apiVersion = 'v1' } = _a, _b = _a.metadata, _c = _b === void 0 ? {} : _b, { labels } = _c, otherMetadata = __rest(_c, ["labels"]);
            return {
                apiVersion,
                kind,
                metadata: Object.assign({ name: this.options.name, labels: Object.assign({ name: this.options.name }, labels) }, otherMetadata),
                data: this.get(),
            };
        });
    }
}
exports.KubeConfigTemplate = KubeConfigTemplate;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS3ViZUNvbmZpZ1RlbXBsYXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vbGliL3RlbXBsYXRlcy9LdWJlQ29uZmlnVGVtcGxhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLDhEQUEyRDtBQWtCM0QsTUFBYSxrQkFBZ0QsU0FBUSx1Q0FBK0M7SUFHM0csTUFBTSxDQUFDLFdBQVcsQ0FDdEIsT0FBc0Q7UUFDdkQsT0FBTyxLQUFLLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBUSxDQUFDO0lBQzNDLENBQUM7SUFFZSxNQUFNOztZQUNwQixNQUFNLGlCQUlVLEVBSlYsRUFDSixJQUFJLEdBQUcsV0FBVyxFQUNsQixVQUFVLEdBQUcsSUFBSSxPQUVILEVBRGQsZ0JBQWtELEVBQWxELDRCQUFrRCxFQUFsRCxFQUFZLE1BQU0sT0FBZ0MsRUFBOUIsc0NBQ04sQ0FBQztZQUVqQixPQUFPO2dCQUNMLFVBQVU7Z0JBQ1YsSUFBSTtnQkFDSixRQUFRLGtCQUNOLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFDdkIsTUFBTSxrQkFDSixJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLElBQ3BCLE1BQU0sS0FFUixhQUFhLENBQ2pCO2dCQUNELElBQUksRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFO2FBQ2pCLENBQUE7UUFDSCxDQUFDO0tBQUE7Q0FDRjtBQTdCRCxnREE2QkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOYW5vQ29uZmlnRGF0YSwgTmFub0NvbmZpZ09wdGlvbnMsIE5hbm9FbnZGaWxlIH0gZnJvbSBcIi4uL05hbm9Db25maWdcIjtcbmltcG9ydCB7IE5hbm9Db25maWdUZW1wbGF0ZSB9IGZyb20gXCIuLi9OYW5vQ29uZmlnVGVtcGxhdGVcIjtcblxuZXhwb3J0IGludGVyZmFjZSBLdWJlQ29uZmlnTWFwVGVtcGxhdGUge1xuICBhcGlWZXJzaW9uOiAndjEnO1xuICBraW5kOiAnQ29uZmlnTWFwJyB8ICdTZWNyZXQnO1xuICBtZXRhZGF0YT86IHtcbiAgICBuYW1lPzogc3RyaW5nO1xuICAgIGxhYmVscz86IGFueTtcbiAgfTtcbiAgZGF0YTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBLdWJlQ29uZmlnVGVtcGxhdGVPcHRpb25zPERhdGEgZXh0ZW5kcyBOYW5vQ29uZmlnRGF0YT4gZXh0ZW5kcyBOYW5vQ29uZmlnT3B0aW9uczxEYXRhPiB7XG4gIGFwaVZlcnNpb24/OiBLdWJlQ29uZmlnTWFwVGVtcGxhdGVbJ2FwaVZlcnNpb24nXTtcbiAga2luZD86IEt1YmVDb25maWdNYXBUZW1wbGF0ZVsna2luZCddO1xuICBtZXRhZGF0YT86IEt1YmVDb25maWdNYXBUZW1wbGF0ZVsnbWV0YWRhdGEnXTtcbn1cblxuZXhwb3J0IGNsYXNzIEt1YmVDb25maWdUZW1wbGF0ZTxEYXRhIGV4dGVuZHMgTmFub0NvbmZpZ0RhdGE+IGV4dGVuZHMgTmFub0NvbmZpZ1RlbXBsYXRlPERhdGEsIEt1YmVDb25maWdNYXBUZW1wbGF0ZT4ge1xuICBwdWJsaWMgb3B0aW9uczogS3ViZUNvbmZpZ1RlbXBsYXRlT3B0aW9uczxEYXRhPjtcblxuICBwdWJsaWMgc3RhdGljIGVudmlyb25tZW50PERhdGEgZXh0ZW5kcyBOYW5vQ29uZmlnRGF0YSA9IHsgZW52OiBzdHJpbmcgfT5cbiAgICAob3B0aW9uczogS3ViZUNvbmZpZ1RlbXBsYXRlT3B0aW9uczxEYXRhPiAmIE5hbm9FbnZGaWxlKTogS3ViZUNvbmZpZ1RlbXBsYXRlPERhdGE+IHtcbiAgICByZXR1cm4gc3VwZXIuZW52aXJvbm1lbnQob3B0aW9ucykgYXMgYW55O1xuICB9XG5cbiAgcHJvdGVjdGVkIGFzeW5jIHJlbmRlcigpOiBQcm9taXNlPEt1YmVDb25maWdNYXBUZW1wbGF0ZT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIGtpbmQgPSAnQ29uZmlnTWFwJyxcbiAgICAgIGFwaVZlcnNpb24gPSAndjEnLFxuICAgICAgbWV0YWRhdGE6IHsgbGFiZWxzLCAuLi5vdGhlck1ldGFkYXRhIH0gPSB7fSBhcyBhbnlcbiAgICB9ID0gdGhpcy5vcHRpb25zO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGFwaVZlcnNpb24sXG4gICAgICBraW5kLFxuICAgICAgbWV0YWRhdGE6IHtcbiAgICAgICAgbmFtZTogdGhpcy5vcHRpb25zLm5hbWUsXG4gICAgICAgIGxhYmVsczoge1xuICAgICAgICAgIG5hbWU6IHRoaXMub3B0aW9ucy5uYW1lLFxuICAgICAgICAgIC4uLmxhYmVscyxcbiAgICAgICAgfSxcbiAgICAgICAgLi4ub3RoZXJNZXRhZGF0YSxcbiAgICAgIH0sXG4gICAgICBkYXRhOiB0aGlzLmdldCgpLFxuICAgIH1cbiAgfVxufVxuIl19