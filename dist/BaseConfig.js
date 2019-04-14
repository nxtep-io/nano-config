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
const dotProp = require("dot-prop");
const nano_errors_1 = require("nano-errors");
const path = require("path");
const storage_1 = require("./storage");
class BaseConfig {
    constructor(options) {
        this.options = options;
        this.data = {};
        this.options.basePath = options.basePath || path.join(process.cwd(), './config/env');
        this.logger = options.logger || nano_errors_1.Logger.getInstance();
        this.data = options.data || this.data;
        this.storage = options.storage || new storage_1.EnvConfigStorage({
            logger: this.logger,
            name: this.options.name,
            basePath: this.options.basePath
        });
    }
    get(key) {
        return dotProp.get(this.data, key);
    }
    loadSync() {
        return this.storage.loadSync();
    }
    dump(overrideName, overridePath) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.storage.dump(this.data, overrideName, overridePath);
        });
    }
}
exports.BaseConfig = BaseConfig;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZUNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2xpYi9CYXNlQ29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxvQ0FBb0M7QUFFcEMsNkNBQXFEO0FBRXJELDZCQUE2QjtBQUM3Qix1Q0FBZ0U7QUFlaEUsTUFBYSxVQUFVO0lBS3JCLFlBQW1CLE9BQTBCO1FBQTFCLFlBQU8sR0FBUCxPQUFPLENBQW1CO1FBSG5DLFNBQUksR0FBbUIsRUFBRSxDQUFDO1FBSWxDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsY0FBYyxDQUFDLENBQUM7UUFDckYsSUFBSSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxJQUFJLG9CQUFNLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDckQsSUFBSSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDdEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsT0FBTyxJQUFJLElBQUksMEJBQWdCLENBQUM7WUFDckQsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ25CLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUk7WUFDdkIsUUFBUSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUTtTQUNoQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU0sR0FBRyxDQUFhLEdBQVc7UUFDaEMsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVNLFFBQVE7UUFDYixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDakMsQ0FBQztJQUVZLElBQUksQ0FBQyxZQUFxQixFQUFFLFlBQXFCOztZQUM1RCxNQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsWUFBWSxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBQ2pFLENBQUM7S0FBQTtDQUNGO0FBM0JELGdDQTJCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGRvdFByb3AgZnJvbSBcImRvdC1wcm9wXCI7XG5pbXBvcnQgKiBhcyBkb3RlbnYgZnJvbSBcImRvdGVudlwiO1xuaW1wb3J0IHsgTG9nZ2VyLCBMb2dnZXJJbnN0YW5jZSB9IGZyb20gJ25hbm8tZXJyb3JzJztcbmltcG9ydCAqIGFzIGZzIGZyb20gJ2ZzLWV4dHJhJztcbmltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgeyBCYXNlQ29uZmlnU3RvcmFnZSwgRW52Q29uZmlnU3RvcmFnZSB9IGZyb20gXCIuL3N0b3JhZ2VcIjtcblxuZXhwb3J0IGludGVyZmFjZSBCYXNlQ29uZmlnRGF0YSB7XG4gIFtrZXk6IHN0cmluZ106IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBCYXNlQ29uZmlnT3B0aW9ucyB7XG4gIG5hbWU6IHN0cmluZztcbiAgYmFzZVBhdGg/OiBzdHJpbmc7XG4gIGxvZ2dlcj86IExvZ2dlckluc3RhbmNlO1xuICBkZWJ1Zz86IGJvb2xlYW47XG4gIGRhdGE/OiBCYXNlQ29uZmlnRGF0YTtcbiAgc3RvcmFnZT86IEJhc2VDb25maWdTdG9yYWdlO1xufVxuXG5leHBvcnQgY2xhc3MgQmFzZUNvbmZpZyB7XG4gIHByb3RlY3RlZCBsb2dnZXI6IExvZ2dlckluc3RhbmNlO1xuICBwcm90ZWN0ZWQgZGF0YTogQmFzZUNvbmZpZ0RhdGEgPSB7fTtcbiAgcHJvdGVjdGVkIHN0b3JhZ2U6IEJhc2VDb25maWdTdG9yYWdlO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBvcHRpb25zOiBCYXNlQ29uZmlnT3B0aW9ucykge1xuICAgIHRoaXMub3B0aW9ucy5iYXNlUGF0aCA9IG9wdGlvbnMuYmFzZVBhdGggfHwgcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICcuL2NvbmZpZy9lbnYnKTtcbiAgICB0aGlzLmxvZ2dlciA9IG9wdGlvbnMubG9nZ2VyIHx8IExvZ2dlci5nZXRJbnN0YW5jZSgpO1xuICAgIHRoaXMuZGF0YSA9IG9wdGlvbnMuZGF0YSB8fCB0aGlzLmRhdGE7XG4gICAgdGhpcy5zdG9yYWdlID0gb3B0aW9ucy5zdG9yYWdlIHx8IG5ldyBFbnZDb25maWdTdG9yYWdlKHsgXG4gICAgICBsb2dnZXI6IHRoaXMubG9nZ2VyLFxuICAgICAgbmFtZTogdGhpcy5vcHRpb25zLm5hbWUsXG4gICAgICBiYXNlUGF0aDogdGhpcy5vcHRpb25zLmJhc2VQYXRoIFxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGdldDxUeXBlID0gYW55PihrZXk6IHN0cmluZyk6IFR5cGUge1xuICAgIHJldHVybiBkb3RQcm9wLmdldCh0aGlzLmRhdGEsIGtleSk7XG4gIH1cblxuICBwdWJsaWMgbG9hZFN5bmMoKTogdm9pZCB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmFnZS5sb2FkU3luYygpO1xuICB9XG5cbiAgcHVibGljIGFzeW5jIGR1bXAob3ZlcnJpZGVOYW1lPzogc3RyaW5nLCBvdmVycmlkZVBhdGg/OiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBhd2FpdCB0aGlzLnN0b3JhZ2UuZHVtcCh0aGlzLmRhdGEsIG92ZXJyaWRlTmFtZSwgb3ZlcnJpZGVQYXRoKTtcbiAgfVxufVxuIl19