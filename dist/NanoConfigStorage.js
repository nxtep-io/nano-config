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
const fs = require("fs-extra");
const nano_errors_1 = require("nano-errors");
const path = require("path");
class NanoConfigStorage {
    constructor(options) {
        this.options = options;
        this.logger = options.logger || nano_errors_1.Logger.getInstance();
    }
    readSync(overrideName, overridePath) {
        const name = overrideName || this.options.name;
        const fileName = `${name}.${this.extension}`;
        const filePath = path.join(overridePath || this.options.basePath, fileName);
        if (fs.existsSync(filePath)) {
            const result = fs.readFileSync(filePath).toString('utf-8');
            this.logger.debug(`Config file loaded successfully from "${fileName}"`, {
                fileName,
                filePath,
            });
            return result;
        }
        this.logger.warn(`Could not locate environment file at "${fileName}"`, {
            fileName,
            filePath,
        });
        return undefined;
    }
    write(raw, overrideName, overridePath) {
        return __awaiter(this, void 0, void 0, function* () {
            const name = overrideName || this.options.name;
            const fileName = `${name}.${this.extension}`;
            const filePath = path.join(overridePath || this.options.basePath, fileName);
            yield fs.ensureDir(this.options.basePath);
            yield fs.ensureFile(filePath);
            this.logger.info(`Writing config file '${name}.${this.extension}'`, {
                fileName,
                basePath: this.options.basePath
            });
            yield fs.writeFile(filePath, raw);
        });
    }
}
exports.NanoConfigStorage = NanoConfigStorage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTmFub0NvbmZpZ1N0b3JhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9saWIvTmFub0NvbmZpZ1N0b3JhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLCtCQUErQjtBQUMvQiw2Q0FBcUQ7QUFDckQsNkJBQTZCO0FBUzdCLE1BQXNCLGlCQUFpQjtJQUtyQyxZQUFtQixPQUFpQztRQUFqQyxZQUFPLEdBQVAsT0FBTyxDQUEwQjtRQUNsRCxJQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLElBQUksb0JBQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN2RCxDQUFDO0lBTVMsUUFBUSxDQUFDLFlBQXFCLEVBQUUsWUFBcUI7UUFDN0QsTUFBTSxJQUFJLEdBQUcsWUFBWSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO1FBQy9DLE1BQU0sUUFBUSxHQUFHLEdBQUcsSUFBSSxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUM3QyxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUU1RSxJQUFJLEVBQUUsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDM0IsTUFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDM0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMseUNBQXlDLFFBQVEsR0FBRyxFQUFFO2dCQUN0RSxRQUFRO2dCQUNSLFFBQVE7YUFDVCxDQUFDLENBQUM7WUFDSCxPQUFPLE1BQU0sQ0FBQztTQUNmO1FBRUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMseUNBQXlDLFFBQVEsR0FBRyxFQUFFO1lBQ3JFLFFBQVE7WUFDUixRQUFRO1NBQ1QsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxTQUFTLENBQUM7SUFDbkIsQ0FBQztJQUVlLEtBQUssQ0FBQyxHQUFXLEVBQUUsWUFBcUIsRUFBRSxZQUFxQjs7WUFDN0UsTUFBTSxJQUFJLEdBQUcsWUFBWSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO1lBQy9DLE1BQU0sUUFBUSxHQUFHLEdBQUcsSUFBSSxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUM3QyxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztZQUU1RSxNQUFNLEVBQUUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUMxQyxNQUFNLEVBQUUsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7WUFFOUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsd0JBQXdCLElBQUksSUFBSSxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUU7Z0JBQ2xFLFFBQVE7Z0JBQ1IsUUFBUSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUTthQUNoQyxDQUFDLENBQUM7WUFFSCxNQUFNLEVBQUUsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3BDLENBQUM7S0FBQTtDQUNGO0FBakRELDhDQWlEQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGZzIGZyb20gJ2ZzLWV4dHJhJztcbmltcG9ydCB7IExvZ2dlciwgTG9nZ2VySW5zdGFuY2UgfSBmcm9tICduYW5vLWVycm9ycyc7XG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IHsgTmFub0NvbmZpZ0RhdGEgfSBmcm9tICcuL05hbm9Db25maWcnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE5hbm9Db25maWdTdG9yYWdlT3B0aW9ucyB7XG4gIG5hbWU6IHN0cmluZztcbiAgYmFzZVBhdGg6IHN0cmluZztcbiAgbG9nZ2VyPzogTG9nZ2VySW5zdGFuY2U7XG59XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBOYW5vQ29uZmlnU3RvcmFnZSB7XG4gIHB1YmxpYyBsb2dnZXI6IExvZ2dlckluc3RhbmNlO1xuICBwdWJsaWMgYWJzdHJhY3QgcmVhZG9ubHkgdHlwZTogc3RyaW5nO1xuICBwdWJsaWMgYWJzdHJhY3QgcmVhZG9ubHkgZXh0ZW5zaW9uOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHVibGljIG9wdGlvbnM6IE5hbm9Db25maWdTdG9yYWdlT3B0aW9ucykge1xuICAgIHRoaXMubG9nZ2VyID0gb3B0aW9ucy5sb2dnZXIgfHwgTG9nZ2VyLmdldEluc3RhbmNlKCk7XG4gIH1cblxuICBwdWJsaWMgYWJzdHJhY3QgbG9hZFN5bmMobmFtZT86IHN0cmluZywgcGF0aD86IHN0cmluZyk6IE5hbm9Db25maWdEYXRhO1xuXG4gIHB1YmxpYyBhYnN0cmFjdCBhc3luYyBkdW1wKGRhdGE6IE5hbm9Db25maWdEYXRhLCBuYW1lPzogc3RyaW5nLCBwYXRoPzogc3RyaW5nKTogUHJvbWlzZTx2b2lkPjtcblxuICBwcm90ZWN0ZWQgcmVhZFN5bmMob3ZlcnJpZGVOYW1lPzogc3RyaW5nLCBvdmVycmlkZVBhdGg/OiBzdHJpbmcpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIGNvbnN0IG5hbWUgPSBvdmVycmlkZU5hbWUgfHwgdGhpcy5vcHRpb25zLm5hbWU7XG4gICAgY29uc3QgZmlsZU5hbWUgPSBgJHtuYW1lfS4ke3RoaXMuZXh0ZW5zaW9ufWA7XG4gICAgY29uc3QgZmlsZVBhdGggPSBwYXRoLmpvaW4ob3ZlcnJpZGVQYXRoIHx8IHRoaXMub3B0aW9ucy5iYXNlUGF0aCwgZmlsZU5hbWUpO1xuXG4gICAgaWYgKGZzLmV4aXN0c1N5bmMoZmlsZVBhdGgpKSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBmcy5yZWFkRmlsZVN5bmMoZmlsZVBhdGgpLnRvU3RyaW5nKCd1dGYtOCcpO1xuICAgICAgdGhpcy5sb2dnZXIuZGVidWcoYENvbmZpZyBmaWxlIGxvYWRlZCBzdWNjZXNzZnVsbHkgZnJvbSBcIiR7ZmlsZU5hbWV9XCJgLCB7XG4gICAgICAgIGZpbGVOYW1lLFxuICAgICAgICBmaWxlUGF0aCxcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICB0aGlzLmxvZ2dlci53YXJuKGBDb3VsZCBub3QgbG9jYXRlIGVudmlyb25tZW50IGZpbGUgYXQgXCIke2ZpbGVOYW1lfVwiYCwge1xuICAgICAgZmlsZU5hbWUsXG4gICAgICBmaWxlUGF0aCxcbiAgICB9KTtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgcHJvdGVjdGVkIGFzeW5jIHdyaXRlKHJhdzogc3RyaW5nLCBvdmVycmlkZU5hbWU/OiBzdHJpbmcsIG92ZXJyaWRlUGF0aD86IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IG5hbWUgPSBvdmVycmlkZU5hbWUgfHwgdGhpcy5vcHRpb25zLm5hbWU7XG4gICAgY29uc3QgZmlsZU5hbWUgPSBgJHtuYW1lfS4ke3RoaXMuZXh0ZW5zaW9ufWA7XG4gICAgY29uc3QgZmlsZVBhdGggPSBwYXRoLmpvaW4ob3ZlcnJpZGVQYXRoIHx8IHRoaXMub3B0aW9ucy5iYXNlUGF0aCwgZmlsZU5hbWUpO1xuXG4gICAgYXdhaXQgZnMuZW5zdXJlRGlyKHRoaXMub3B0aW9ucy5iYXNlUGF0aCk7XG4gICAgYXdhaXQgZnMuZW5zdXJlRmlsZShmaWxlUGF0aCk7XG5cbiAgICB0aGlzLmxvZ2dlci5pbmZvKGBXcml0aW5nIGNvbmZpZyBmaWxlICcke25hbWV9LiR7dGhpcy5leHRlbnNpb259J2AsIHtcbiAgICAgIGZpbGVOYW1lLFxuICAgICAgYmFzZVBhdGg6IHRoaXMub3B0aW9ucy5iYXNlUGF0aFxuICAgIH0pO1xuXG4gICAgYXdhaXQgZnMud3JpdGVGaWxlKGZpbGVQYXRoLCByYXcpO1xuICB9XG59Il19