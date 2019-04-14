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
const path = require("path");
const fs = require("fs-extra");
const dotenv = require("dotenv");
const BaseConfigStorage_1 = require("./BaseConfigStorage");
class EnvConfigStorage extends BaseConfigStorage_1.BaseConfigStorage {
    constructor() {
        super(...arguments);
        this.type = 'ENV';
        this.extension = 'env';
    }
    loadSync() {
        const envPath = path.join(this.options.basePath, `${this.options.name}.${this.extension}`);
        if (fs.existsSync(envPath)) {
            // TODO: Pass debug as constructor argument
            const result = dotenv.config({ path: envPath, debug: true });
            this.logger.debug(`Environment config loaded successfully from "${this.options.name}.${this.extension}"`, {
                basePath: this.options.basePath,
                result: result.parsed,
            });
            return Object.assign({}, result.parsed);
        }
        this.logger.warn(`Could not locate environment file at "${this.options.name}.${this.extension}"`);
        return {};
    }
    dump(data, overrideName, overridePath) {
        return __awaiter(this, void 0, void 0, function* () {
            const raw = [];
            for (const key in data) {
                raw.push(`${key}=${data[key]}`);
            }
            return this.write(raw.join('\n'), overrideName, overridePath);
        });
    }
}
exports.EnvConfigStorage = EnvConfigStorage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW52Q29uZmlnU3RvcmFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9zdG9yYWdlL0VudkNvbmZpZ1N0b3JhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDZCQUE2QjtBQUM3QiwrQkFBK0I7QUFDL0IsaUNBQWlDO0FBRWpDLDJEQUF3RDtBQUV4RCxNQUFhLGdCQUFpQixTQUFRLHFDQUFpQjtJQUF2RDs7UUFDVyxTQUFJLEdBQUcsS0FBSyxDQUFDO1FBQ2IsY0FBUyxHQUFHLEtBQUssQ0FBQztJQThCN0IsQ0FBQztJQTVCUSxRQUFRO1FBQ2IsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO1FBRTNGLElBQUksRUFBRSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUMxQiwyQ0FBMkM7WUFDM0MsTUFBTSxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7WUFFN0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsZ0RBQWdELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRTtnQkFDeEcsUUFBUSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUTtnQkFDL0IsTUFBTSxFQUFFLE1BQU0sQ0FBQyxNQUFNO2FBQ3RCLENBQUMsQ0FBQztZQUVILE9BQU8sa0JBQUssTUFBTSxDQUFDLE1BQU0sQ0FBb0IsQ0FBQztTQUMvQztRQUVELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLHlDQUF5QyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUNsRyxPQUFPLEVBQW9CLENBQUM7SUFDOUIsQ0FBQztJQUVZLElBQUksQ0FBQyxJQUFvQixFQUFFLFlBQXFCLEVBQUUsWUFBcUI7O1lBQ2xGLE1BQU0sR0FBRyxHQUFhLEVBQUUsQ0FBQztZQUV6QixLQUFLLE1BQU0sR0FBRyxJQUFJLElBQUksRUFBRTtnQkFDdEIsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBQ2pDO1lBRUQsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsWUFBWSxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBQ2hFLENBQUM7S0FBQTtDQUNGO0FBaENELDRDQWdDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgKiBhcyBmcyBmcm9tICdmcy1leHRyYSc7XG5pbXBvcnQgKiBhcyBkb3RlbnYgZnJvbSAnZG90ZW52JztcbmltcG9ydCB7IEJhc2VDb25maWdEYXRhIH0gZnJvbSBcIi4uL0Jhc2VDb25maWdcIjtcbmltcG9ydCB7IEJhc2VDb25maWdTdG9yYWdlIH0gZnJvbSBcIi4vQmFzZUNvbmZpZ1N0b3JhZ2VcIjtcblxuZXhwb3J0IGNsYXNzIEVudkNvbmZpZ1N0b3JhZ2UgZXh0ZW5kcyBCYXNlQ29uZmlnU3RvcmFnZSB7XG4gIHJlYWRvbmx5IHR5cGUgPSAnRU5WJztcbiAgcmVhZG9ubHkgZXh0ZW5zaW9uID0gJ2Vudic7XG5cbiAgcHVibGljIGxvYWRTeW5jKCk6IEJhc2VDb25maWdEYXRhIHtcbiAgICBjb25zdCBlbnZQYXRoID0gcGF0aC5qb2luKHRoaXMub3B0aW9ucy5iYXNlUGF0aCwgYCR7dGhpcy5vcHRpb25zLm5hbWV9LiR7dGhpcy5leHRlbnNpb259YCk7XG5cbiAgICBpZiAoZnMuZXhpc3RzU3luYyhlbnZQYXRoKSkge1xuICAgICAgLy8gVE9ETzogUGFzcyBkZWJ1ZyBhcyBjb25zdHJ1Y3RvciBhcmd1bWVudFxuICAgICAgY29uc3QgcmVzdWx0ID0gZG90ZW52LmNvbmZpZyh7IHBhdGg6IGVudlBhdGgsIGRlYnVnOiB0cnVlIH0pO1xuICAgICAgXG4gICAgICB0aGlzLmxvZ2dlci5kZWJ1ZyhgRW52aXJvbm1lbnQgY29uZmlnIGxvYWRlZCBzdWNjZXNzZnVsbHkgZnJvbSBcIiR7dGhpcy5vcHRpb25zLm5hbWV9LiR7dGhpcy5leHRlbnNpb259XCJgLCB7XG4gICAgICAgIGJhc2VQYXRoOiB0aGlzLm9wdGlvbnMuYmFzZVBhdGgsXG4gICAgICAgIHJlc3VsdDogcmVzdWx0LnBhcnNlZCxcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4geyAuLi5yZXN1bHQucGFyc2VkIH0gYXMgQmFzZUNvbmZpZ0RhdGE7XG4gICAgfVxuXG4gICAgdGhpcy5sb2dnZXIud2FybihgQ291bGQgbm90IGxvY2F0ZSBlbnZpcm9ubWVudCBmaWxlIGF0IFwiJHt0aGlzLm9wdGlvbnMubmFtZX0uJHt0aGlzLmV4dGVuc2lvbn1cImApO1xuICAgIHJldHVybiB7fSBhcyBCYXNlQ29uZmlnRGF0YTtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBkdW1wKGRhdGE6IEJhc2VDb25maWdEYXRhLCBvdmVycmlkZU5hbWU/OiBzdHJpbmcsIG92ZXJyaWRlUGF0aD86IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IHJhdzogc3RyaW5nW10gPSBbXTtcblxuICAgIGZvciAoY29uc3Qga2V5IGluIGRhdGEpIHtcbiAgICAgIHJhdy5wdXNoKGAke2tleX09JHtkYXRhW2tleV19YCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMud3JpdGUocmF3LmpvaW4oJ1xcbicpLCBvdmVycmlkZU5hbWUsIG92ZXJyaWRlUGF0aCk7XG4gIH1cbn0iXX0=