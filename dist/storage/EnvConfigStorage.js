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
        const envPath = path.join(this.options.basePath, `${this.options.name}.env`);
        if (fs.existsSync(envPath)) {
            // TODO: Pass debug as constructor argument
            const result = dotenv.config({ path: envPath, debug: true });
            this.logger.debug(`Environment config loaded successfully from "${this.options.name}.env"`, {
                basePath: this.options.basePath,
                result: result.parsed,
            });
            return Object.assign({}, result.parsed);
        }
        this.logger.warn(`Could not locate environment file at "${this.options.name}.env"`);
        return {};
    }
    dump(data, overrideName, overridePath) {
        return __awaiter(this, void 0, void 0, function* () {
            let raw = "";
            for (const key in data) {
                raw += `${key}=${data[key]}\n`;
            }
            return this.write(raw, overrideName, overridePath);
        });
    }
}
exports.EnvConfigStorage = EnvConfigStorage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW52Q29uZmlnU3RvcmFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9zdG9yYWdlL0VudkNvbmZpZ1N0b3JhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDZCQUE2QjtBQUM3QiwrQkFBK0I7QUFDL0IsaUNBQWlDO0FBRWpDLDJEQUF3RDtBQUV4RCxNQUFhLGdCQUFpQixTQUFRLHFDQUFpQjtJQUF2RDs7UUFDRSxTQUFJLEdBQUcsS0FBSyxDQUFDO1FBQ2IsY0FBUyxHQUFHLEtBQUssQ0FBQztJQThCcEIsQ0FBQztJQTVCUSxRQUFRO1FBQ2IsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxNQUFNLENBQUMsQ0FBQztRQUU3RSxJQUFJLEVBQUUsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDMUIsMkNBQTJDO1lBQzNDLE1BQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1lBRTdELElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLGdEQUFnRCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksT0FBTyxFQUFFO2dCQUMxRixRQUFRLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRO2dCQUMvQixNQUFNLEVBQUUsTUFBTSxDQUFDLE1BQU07YUFDdEIsQ0FBQyxDQUFDO1lBRUgseUJBQVksTUFBTSxDQUFDLE1BQU0sRUFBRztTQUM3QjtRQUVELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLHlDQUF5QyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksT0FBTyxDQUFDLENBQUM7UUFDcEYsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDO0lBRVksSUFBSSxDQUFDLElBQW9CLEVBQUUsWUFBcUIsRUFBRSxZQUFxQjs7WUFDbEYsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDO1lBRWIsS0FBSyxNQUFNLEdBQUcsSUFBSSxJQUFJLEVBQUU7Z0JBQ3RCLEdBQUcsSUFBSSxHQUFHLEdBQUcsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQzthQUNoQztZQUVELE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsWUFBWSxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBQ3JELENBQUM7S0FBQTtDQUNGO0FBaENELDRDQWdDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgKiBhcyBmcyBmcm9tICdmcy1leHRyYSc7XG5pbXBvcnQgKiBhcyBkb3RlbnYgZnJvbSAnZG90ZW52JztcbmltcG9ydCB7IEJhc2VDb25maWdEYXRhIH0gZnJvbSBcIi4uL0Jhc2VDb25maWdcIjtcbmltcG9ydCB7IEJhc2VDb25maWdTdG9yYWdlIH0gZnJvbSBcIi4vQmFzZUNvbmZpZ1N0b3JhZ2VcIjtcblxuZXhwb3J0IGNsYXNzIEVudkNvbmZpZ1N0b3JhZ2UgZXh0ZW5kcyBCYXNlQ29uZmlnU3RvcmFnZSB7XG4gIHR5cGUgPSAnRU5WJztcbiAgZXh0ZW5zaW9uID0gJ2Vudic7XG5cbiAgcHVibGljIGxvYWRTeW5jKCk6IEJhc2VDb25maWdEYXRhIHtcbiAgICBjb25zdCBlbnZQYXRoID0gcGF0aC5qb2luKHRoaXMub3B0aW9ucy5iYXNlUGF0aCwgYCR7dGhpcy5vcHRpb25zLm5hbWV9LmVudmApO1xuXG4gICAgaWYgKGZzLmV4aXN0c1N5bmMoZW52UGF0aCkpIHtcbiAgICAgIC8vIFRPRE86IFBhc3MgZGVidWcgYXMgY29uc3RydWN0b3IgYXJndW1lbnRcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGRvdGVudi5jb25maWcoeyBwYXRoOiBlbnZQYXRoLCBkZWJ1ZzogdHJ1ZSB9KTtcbiAgICAgIFxuICAgICAgdGhpcy5sb2dnZXIuZGVidWcoYEVudmlyb25tZW50IGNvbmZpZyBsb2FkZWQgc3VjY2Vzc2Z1bGx5IGZyb20gXCIke3RoaXMub3B0aW9ucy5uYW1lfS5lbnZcImAsIHtcbiAgICAgICAgYmFzZVBhdGg6IHRoaXMub3B0aW9ucy5iYXNlUGF0aCxcbiAgICAgICAgcmVzdWx0OiByZXN1bHQucGFyc2VkLFxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiB7IC4uLnJlc3VsdC5wYXJzZWQgfTtcbiAgICB9XG5cbiAgICB0aGlzLmxvZ2dlci53YXJuKGBDb3VsZCBub3QgbG9jYXRlIGVudmlyb25tZW50IGZpbGUgYXQgXCIke3RoaXMub3B0aW9ucy5uYW1lfS5lbnZcImApO1xuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBkdW1wKGRhdGE6IEJhc2VDb25maWdEYXRhLCBvdmVycmlkZU5hbWU/OiBzdHJpbmcsIG92ZXJyaWRlUGF0aD86IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgIGxldCByYXcgPSBcIlwiO1xuXG4gICAgZm9yIChjb25zdCBrZXkgaW4gZGF0YSkge1xuICAgICAgcmF3ICs9IGAke2tleX09JHtkYXRhW2tleV19XFxuYDtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy53cml0ZShyYXcsIG92ZXJyaWRlTmFtZSwgb3ZlcnJpZGVQYXRoKTtcbiAgfVxufSJdfQ==