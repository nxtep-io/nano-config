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
class BaseConfigStorage {
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
            this.logger.debug(`Environment config loaded successfully from "${this.options.name}.env"`, {
                result,
                basePath: this.options.basePath,
            });
            return result;
        }
        this.logger.warn(`Could not locate environment file at "${fileName}"`);
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
exports.BaseConfigStorage = BaseConfigStorage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZUNvbmZpZ1N0b3JhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9saWIvc3RvcmFnZS9CYXNlQ29uZmlnU3RvcmFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsK0JBQStCO0FBQy9CLDZDQUFxRDtBQUNyRCw2QkFBNkI7QUFTN0IsTUFBc0IsaUJBQWlCO0lBS3JDLFlBQW1CLE9BQWlDO1FBQWpDLFlBQU8sR0FBUCxPQUFPLENBQTBCO1FBQ2xELElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sSUFBSSxvQkFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3ZELENBQUM7SUFNUyxRQUFRLENBQUMsWUFBcUIsRUFBRSxZQUFxQjtRQUM3RCxNQUFNLElBQUksR0FBRyxZQUFZLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7UUFDL0MsTUFBTSxRQUFRLEdBQUcsR0FBRyxJQUFJLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQzdDLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBRTVFLElBQUksRUFBRSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUMzQixNQUFNLE1BQU0sR0FBRyxFQUFFLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUMzRCxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxnREFBZ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLE9BQU8sRUFBRTtnQkFDMUYsTUFBTTtnQkFDTixRQUFRLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRO2FBQ2hDLENBQUMsQ0FBQztZQUNILE9BQU8sTUFBTSxDQUFDO1NBQ2Y7UUFFRCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyx5Q0FBeUMsUUFBUSxHQUFHLENBQUMsQ0FBQztRQUN2RSxPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDO0lBRWUsS0FBSyxDQUFDLEdBQVcsRUFBRSxZQUFxQixFQUFFLFlBQXFCOztZQUM3RSxNQUFNLElBQUksR0FBRyxZQUFZLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7WUFDL0MsTUFBTSxRQUFRLEdBQUcsR0FBRyxJQUFJLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQzdDLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBRTVFLE1BQU0sRUFBRSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzFDLE1BQU0sRUFBRSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUU5QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyx3QkFBd0IsSUFBSSxJQUFJLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRTtnQkFDbEUsUUFBUTtnQkFDUixRQUFRLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRO2FBQ2hDLENBQUMsQ0FBQztZQUVILE1BQU0sRUFBRSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDcEMsQ0FBQztLQUFBO0NBQ0Y7QUE5Q0QsOENBOENDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZnMgZnJvbSAnZnMtZXh0cmEnO1xuaW1wb3J0IHsgTG9nZ2VyLCBMb2dnZXJJbnN0YW5jZSB9IGZyb20gJ25hbm8tZXJyb3JzJztcbmltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgeyBCYXNlQ29uZmlnRGF0YSB9IGZyb20gJy4uL0Jhc2VDb25maWcnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEJhc2VDb25maWdTdG9yYWdlT3B0aW9ucyB7XG4gIG5hbWU6IHN0cmluZztcbiAgYmFzZVBhdGg6IHN0cmluZztcbiAgbG9nZ2VyPzogTG9nZ2VySW5zdGFuY2U7XG59XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYXNlQ29uZmlnU3RvcmFnZSB7XG4gIHB1YmxpYyBsb2dnZXI6IExvZ2dlckluc3RhbmNlO1xuICBwdWJsaWMgYWJzdHJhY3QgcmVhZG9ubHkgdHlwZTogc3RyaW5nO1xuICBwdWJsaWMgYWJzdHJhY3QgcmVhZG9ubHkgZXh0ZW5zaW9uOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHVibGljIG9wdGlvbnM6IEJhc2VDb25maWdTdG9yYWdlT3B0aW9ucykge1xuICAgIHRoaXMubG9nZ2VyID0gb3B0aW9ucy5sb2dnZXIgfHwgTG9nZ2VyLmdldEluc3RhbmNlKCk7XG4gIH1cblxuICBwdWJsaWMgYWJzdHJhY3QgbG9hZFN5bmMobmFtZT86IHN0cmluZywgcGF0aD86IHN0cmluZyk6IEJhc2VDb25maWdEYXRhO1xuXG4gIHB1YmxpYyBhYnN0cmFjdCBhc3luYyBkdW1wKGRhdGE6IEJhc2VDb25maWdEYXRhLCBuYW1lPzogc3RyaW5nLCBwYXRoPzogc3RyaW5nKTogUHJvbWlzZTx2b2lkPjtcblxuICBwcm90ZWN0ZWQgcmVhZFN5bmMob3ZlcnJpZGVOYW1lPzogc3RyaW5nLCBvdmVycmlkZVBhdGg/OiBzdHJpbmcpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIGNvbnN0IG5hbWUgPSBvdmVycmlkZU5hbWUgfHwgdGhpcy5vcHRpb25zLm5hbWU7XG4gICAgY29uc3QgZmlsZU5hbWUgPSBgJHtuYW1lfS4ke3RoaXMuZXh0ZW5zaW9ufWA7XG4gICAgY29uc3QgZmlsZVBhdGggPSBwYXRoLmpvaW4ob3ZlcnJpZGVQYXRoIHx8IHRoaXMub3B0aW9ucy5iYXNlUGF0aCwgZmlsZU5hbWUpO1xuXG4gICAgaWYgKGZzLmV4aXN0c1N5bmMoZmlsZVBhdGgpKSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBmcy5yZWFkRmlsZVN5bmMoZmlsZVBhdGgpLnRvU3RyaW5nKCd1dGYtOCcpO1xuICAgICAgdGhpcy5sb2dnZXIuZGVidWcoYEVudmlyb25tZW50IGNvbmZpZyBsb2FkZWQgc3VjY2Vzc2Z1bGx5IGZyb20gXCIke3RoaXMub3B0aW9ucy5uYW1lfS5lbnZcImAsIHtcbiAgICAgICAgcmVzdWx0LFxuICAgICAgICBiYXNlUGF0aDogdGhpcy5vcHRpb25zLmJhc2VQYXRoLFxuICAgICAgfSk7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIHRoaXMubG9nZ2VyLndhcm4oYENvdWxkIG5vdCBsb2NhdGUgZW52aXJvbm1lbnQgZmlsZSBhdCBcIiR7ZmlsZU5hbWV9XCJgKTtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgcHJvdGVjdGVkIGFzeW5jIHdyaXRlKHJhdzogc3RyaW5nLCBvdmVycmlkZU5hbWU/OiBzdHJpbmcsIG92ZXJyaWRlUGF0aD86IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IG5hbWUgPSBvdmVycmlkZU5hbWUgfHwgdGhpcy5vcHRpb25zLm5hbWU7XG4gICAgY29uc3QgZmlsZU5hbWUgPSBgJHtuYW1lfS4ke3RoaXMuZXh0ZW5zaW9ufWA7XG4gICAgY29uc3QgZmlsZVBhdGggPSBwYXRoLmpvaW4ob3ZlcnJpZGVQYXRoIHx8IHRoaXMub3B0aW9ucy5iYXNlUGF0aCwgZmlsZU5hbWUpO1xuXG4gICAgYXdhaXQgZnMuZW5zdXJlRGlyKHRoaXMub3B0aW9ucy5iYXNlUGF0aCk7XG4gICAgYXdhaXQgZnMuZW5zdXJlRmlsZShmaWxlUGF0aCk7XG5cbiAgICB0aGlzLmxvZ2dlci5pbmZvKGBXcml0aW5nIGNvbmZpZyBmaWxlICcke25hbWV9LiR7dGhpcy5leHRlbnNpb259J2AsIHsgXG4gICAgICBmaWxlTmFtZSxcbiAgICAgIGJhc2VQYXRoOiB0aGlzLm9wdGlvbnMuYmFzZVBhdGggXG4gICAgfSk7XG4gICAgXG4gICAgYXdhaXQgZnMud3JpdGVGaWxlKGZpbGVQYXRoLCByYXcpO1xuICB9XG59Il19