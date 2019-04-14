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
class KubeConfigTemplate extends NanoConfigTemplate_1.NanoConfigTemplate {
    render() {
        return __awaiter(this, void 0, void 0, function* () {
            return {
                apiVersion: 'v1',
                kind: 'ConfigMap',
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
exports.KubeConfigTemplate = KubeConfigTemplate;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS3ViZUNvbmZpZ1RlbXBsYXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vbGliL3RlbXBsYXRlcy9LdWJlQ29uZmlnVGVtcGxhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDhEQUEyRDtBQVkzRCxNQUFhLGtCQUFtQixTQUFRLHVDQUFrQztJQUV4RCxNQUFNOztZQUNwQixPQUFPO2dCQUNMLFVBQVUsRUFBRSxJQUFJO2dCQUNoQixJQUFJLEVBQUUsV0FBVztnQkFDakIsUUFBUSxFQUFFO29CQUNSLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUk7b0JBQ3ZCLE1BQU0sRUFBRTt3QkFDTixJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJO3FCQUN4QjtpQkFDRjtnQkFDRCxJQUFJLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRTthQUNqQixDQUFBO1FBQ0gsQ0FBQztLQUFBO0NBQ0Y7QUFmRCxnREFlQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5hbm9Db25maWdUZW1wbGF0ZSB9IGZyb20gXCIuLi9OYW5vQ29uZmlnVGVtcGxhdGVcIjtcblxuZXhwb3J0IGludGVyZmFjZSBLdWJlQ29uZmlnRGF0YSB7XG4gIGFwaVZlcnNpb246ICd2MSc7XG4gIGtpbmQ6ICdDb25maWdNYXAnO1xuICBtZXRhZGF0YToge1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBsYWJlbHM6IGFueTtcbiAgfTtcbiAgZGF0YTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcbn1cblxuZXhwb3J0IGNsYXNzIEt1YmVDb25maWdUZW1wbGF0ZSBleHRlbmRzIE5hbm9Db25maWdUZW1wbGF0ZTxLdWJlQ29uZmlnRGF0YT4ge1xuXG4gIHByb3RlY3RlZCBhc3luYyByZW5kZXIoKTogUHJvbWlzZTxLdWJlQ29uZmlnRGF0YT4ge1xuICAgIHJldHVybiB7XG4gICAgICBhcGlWZXJzaW9uOiAndjEnLFxuICAgICAga2luZDogJ0NvbmZpZ01hcCcsXG4gICAgICBtZXRhZGF0YToge1xuICAgICAgICBuYW1lOiB0aGlzLm9wdGlvbnMubmFtZSxcbiAgICAgICAgbGFiZWxzOiB7XG4gICAgICAgICAgbmFtZTogdGhpcy5vcHRpb25zLm5hbWUsXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBkYXRhOiB0aGlzLmdldCgpLFxuICAgIH1cbiAgfVxufVxuIl19