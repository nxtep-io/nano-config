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
            const data = {};
            const raw = this.get();
            for (const key in raw) {
                if (kind === 'Secret') {
                    data[key] = Buffer.from(raw[key]).toString('base64');
                }
                else {
                    data[key] = raw[key];
                }
            }
            return {
                apiVersion,
                kind,
                metadata: Object.assign({ name: this.options.name, labels: Object.assign({ name: this.options.name }, labels) }, otherMetadata),
                // tslint:disable-next-line:object-shorthand-properties-first
                data,
            };
        });
    }
}
exports.KubeConfigTemplate = KubeConfigTemplate;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS3ViZUNvbmZpZ1RlbXBsYXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vbGliL3RlbXBsYXRlcy9LdWJlQ29uZmlnVGVtcGxhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLDhEQUEyRDtBQWtCM0QsTUFBYSxrQkFBZ0QsU0FBUSx1Q0FBK0M7SUFHM0csTUFBTSxDQUFDLFdBQVcsQ0FDdEIsT0FBc0Q7UUFDdkQsT0FBTyxLQUFLLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBUSxDQUFDO0lBQzNDLENBQUM7SUFFZSxNQUFNOztZQUNwQixNQUFNLGlCQUlVLEVBSlYsRUFDSixJQUFJLEdBQUcsV0FBVyxFQUNsQixVQUFVLEdBQUcsSUFBSSxPQUVILEVBRGQsZ0JBQWtELEVBQWxELDRCQUFrRCxFQUFsRCxFQUFZLE1BQU0sT0FBZ0MsRUFBOUIsc0NBQ04sQ0FBQztZQUVqQixNQUFNLElBQUksR0FBRyxFQUFTLENBQUM7WUFDdkIsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBRXZCLEtBQUssTUFBTSxHQUFHLElBQUksR0FBRyxFQUFFO2dCQUNyQixJQUFJLElBQUksS0FBSyxRQUFRLEVBQUU7b0JBQ3JCLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztpQkFDdEQ7cUJBQU07b0JBQ0wsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztpQkFDdEI7YUFDRjtZQUVELE9BQU87Z0JBQ0wsVUFBVTtnQkFDVixJQUFJO2dCQUNKLFFBQVEsa0JBQ04sSUFBSSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUN2QixNQUFNLGtCQUNKLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksSUFDcEIsTUFBTSxLQUVSLGFBQWEsQ0FDakI7Z0JBQ0QsNkRBQTZEO2dCQUM3RCxJQUFJO2FBQ0wsQ0FBQTtRQUNILENBQUM7S0FBQTtDQUNGO0FBekNELGdEQXlDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5hbm9Db25maWdEYXRhLCBOYW5vQ29uZmlnT3B0aW9ucywgTmFub0VudkZpbGUgfSBmcm9tIFwiLi4vTmFub0NvbmZpZ1wiO1xuaW1wb3J0IHsgTmFub0NvbmZpZ1RlbXBsYXRlIH0gZnJvbSBcIi4uL05hbm9Db25maWdUZW1wbGF0ZVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEt1YmVDb25maWdNYXBUZW1wbGF0ZSB7XG4gIGFwaVZlcnNpb246ICd2MSc7XG4gIGtpbmQ6ICdDb25maWdNYXAnIHwgJ1NlY3JldCc7XG4gIG1ldGFkYXRhPzoge1xuICAgIG5hbWU/OiBzdHJpbmc7XG4gICAgbGFiZWxzPzogYW55O1xuICB9O1xuICBkYXRhOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEt1YmVDb25maWdUZW1wbGF0ZU9wdGlvbnM8RGF0YSBleHRlbmRzIE5hbm9Db25maWdEYXRhPiBleHRlbmRzIE5hbm9Db25maWdPcHRpb25zPERhdGE+IHtcbiAgYXBpVmVyc2lvbj86IEt1YmVDb25maWdNYXBUZW1wbGF0ZVsnYXBpVmVyc2lvbiddO1xuICBraW5kPzogS3ViZUNvbmZpZ01hcFRlbXBsYXRlWydraW5kJ107XG4gIG1ldGFkYXRhPzogS3ViZUNvbmZpZ01hcFRlbXBsYXRlWydtZXRhZGF0YSddO1xufVxuXG5leHBvcnQgY2xhc3MgS3ViZUNvbmZpZ1RlbXBsYXRlPERhdGEgZXh0ZW5kcyBOYW5vQ29uZmlnRGF0YT4gZXh0ZW5kcyBOYW5vQ29uZmlnVGVtcGxhdGU8RGF0YSwgS3ViZUNvbmZpZ01hcFRlbXBsYXRlPiB7XG4gIHB1YmxpYyBvcHRpb25zOiBLdWJlQ29uZmlnVGVtcGxhdGVPcHRpb25zPERhdGE+O1xuXG4gIHB1YmxpYyBzdGF0aWMgZW52aXJvbm1lbnQ8RGF0YSBleHRlbmRzIE5hbm9Db25maWdEYXRhID0geyBlbnY6IHN0cmluZyB9PlxuICAgIChvcHRpb25zOiBLdWJlQ29uZmlnVGVtcGxhdGVPcHRpb25zPERhdGE+ICYgTmFub0VudkZpbGUpOiBLdWJlQ29uZmlnVGVtcGxhdGU8RGF0YT4ge1xuICAgIHJldHVybiBzdXBlci5lbnZpcm9ubWVudChvcHRpb25zKSBhcyBhbnk7XG4gIH1cblxuICBwcm90ZWN0ZWQgYXN5bmMgcmVuZGVyKCk6IFByb21pc2U8S3ViZUNvbmZpZ01hcFRlbXBsYXRlPiB7XG4gICAgY29uc3Qge1xuICAgICAga2luZCA9ICdDb25maWdNYXAnLFxuICAgICAgYXBpVmVyc2lvbiA9ICd2MScsXG4gICAgICBtZXRhZGF0YTogeyBsYWJlbHMsIC4uLm90aGVyTWV0YWRhdGEgfSA9IHt9IGFzIGFueVxuICAgIH0gPSB0aGlzLm9wdGlvbnM7XG5cbiAgICBjb25zdCBkYXRhID0ge30gYXMgYW55O1xuICAgIGNvbnN0IHJhdyA9IHRoaXMuZ2V0KCk7XG5cbiAgICBmb3IgKGNvbnN0IGtleSBpbiByYXcpIHtcbiAgICAgIGlmIChraW5kID09PSAnU2VjcmV0Jykge1xuICAgICAgICBkYXRhW2tleV0gPSBCdWZmZXIuZnJvbShyYXdba2V5XSkudG9TdHJpbmcoJ2Jhc2U2NCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGF0YVtrZXldID0gcmF3W2tleV07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGFwaVZlcnNpb24sXG4gICAgICBraW5kLFxuICAgICAgbWV0YWRhdGE6IHtcbiAgICAgICAgbmFtZTogdGhpcy5vcHRpb25zLm5hbWUsXG4gICAgICAgIGxhYmVsczoge1xuICAgICAgICAgIG5hbWU6IHRoaXMub3B0aW9ucy5uYW1lLFxuICAgICAgICAgIC4uLmxhYmVscyxcbiAgICAgICAgfSxcbiAgICAgICAgLi4ub3RoZXJNZXRhZGF0YSxcbiAgICAgIH0sXG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6b2JqZWN0LXNob3J0aGFuZC1wcm9wZXJ0aWVzLWZpcnN0XG4gICAgICBkYXRhLFxuICAgIH1cbiAgfVxufVxuIl19