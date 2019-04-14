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
const NanoConfigTemplate_1 = require("../NanoConfigTemplate");
class KubeSecretTemplate extends NanoConfigTemplate_1.NanoConfigTemplate {
    render() {
        return __awaiter(this, void 0, void 0, function* () {
            return {
                apiVersion: 'v1',
                kind: 'Secret',
                metadata: {
                    name: this.options.name,
                    labels: {
                        name: this.options.name,
                    }
                },
                data: this.get(),
            };
        });
    }
}
exports.KubeSecretTemplate = KubeSecretTemplate;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS3ViZVNlY3JldFRlbXBsYXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vbGliL3RlbXBsYXRlcy9LdWJlU2VjcmV0VGVtcGxhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDhEQUEyRDtBQVkzRCxNQUFhLGtCQUFtQixTQUFRLHVDQUFrQztJQUV4RCxNQUFNOztZQUNwQixPQUFPO2dCQUNMLFVBQVUsRUFBRSxJQUFJO2dCQUNoQixJQUFJLEVBQUUsUUFBUTtnQkFDZCxRQUFRLEVBQUU7b0JBQ1IsSUFBSSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSTtvQkFDdkIsTUFBTSxFQUFFO3dCQUNOLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUk7cUJBQ3hCO2lCQUNGO2dCQUNELElBQUksRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFO2FBQ2pCLENBQUE7UUFDSCxDQUFDO0tBQUE7Q0FDRjtBQWZELGdEQWVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmFub0NvbmZpZ1RlbXBsYXRlIH0gZnJvbSBcIi4uL05hbm9Db25maWdUZW1wbGF0ZVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEt1YmVTZWNyZXREYXRhIHtcbiAgYXBpVmVyc2lvbjogJ3YxJztcbiAga2luZDogJ1NlY3JldCc7XG4gIG1ldGFkYXRhOiB7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIGxhYmVsczogYW55O1xuICB9O1xuICBkYXRhOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xufVxuXG5leHBvcnQgY2xhc3MgS3ViZVNlY3JldFRlbXBsYXRlIGV4dGVuZHMgTmFub0NvbmZpZ1RlbXBsYXRlPEt1YmVTZWNyZXREYXRhPiB7XG5cbiAgcHJvdGVjdGVkIGFzeW5jIHJlbmRlcigpOiBQcm9taXNlPEt1YmVTZWNyZXREYXRhPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFwaVZlcnNpb246ICd2MScsXG4gICAgICBraW5kOiAnU2VjcmV0JyxcbiAgICAgIG1ldGFkYXRhOiB7XG4gICAgICAgIG5hbWU6IHRoaXMub3B0aW9ucy5uYW1lLFxuICAgICAgICBsYWJlbHM6IHtcbiAgICAgICAgICBuYW1lOiB0aGlzLm9wdGlvbnMubmFtZSxcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGRhdGE6IHRoaXMuZ2V0KCksXG4gICAgfVxuICB9XG59XG4iXX0=