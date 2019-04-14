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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZUNvbmZpZ1N0b3JhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9saWIvc3RvcmFnZS9CYXNlQ29uZmlnU3RvcmFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsK0JBQStCO0FBQy9CLDZDQUFxRDtBQUNyRCw2QkFBNkI7QUFTN0IsTUFBc0IsaUJBQWlCO0lBS3JDLFlBQW1CLE9BQWlDO1FBQWpDLFlBQU8sR0FBUCxPQUFPLENBQTBCO1FBQ2xELElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sSUFBSSxvQkFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3ZELENBQUM7SUFNUyxRQUFRLENBQUMsWUFBcUIsRUFBRSxZQUFxQjtRQUM3RCxNQUFNLElBQUksR0FBRyxZQUFZLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7UUFDL0MsTUFBTSxRQUFRLEdBQUcsR0FBRyxJQUFJLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQzdDLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBRTVFLElBQUksRUFBRSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUMzQixNQUFNLE1BQU0sR0FBRyxFQUFFLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUMzRCxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxnREFBZ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLE9BQU8sRUFBRTtnQkFDMUYsTUFBTTtnQkFDTixRQUFRLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRO2FBQ2hDLENBQUMsQ0FBQztZQUNILE9BQU8sTUFBTSxDQUFDO1NBQ2Y7UUFFRCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyx5Q0FBeUMsUUFBUSxHQUFHLENBQUMsQ0FBQztRQUN2RSxPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDO0lBRWUsS0FBSyxDQUFDLEdBQVcsRUFBRSxZQUFxQixFQUFFLFlBQXFCOztZQUM3RSxNQUFNLElBQUksR0FBRyxZQUFZLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7WUFDL0MsTUFBTSxRQUFRLEdBQUcsR0FBRyxJQUFJLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQzdDLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBRTVFLE1BQU0sRUFBRSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzFDLE1BQU0sRUFBRSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUU5QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyx3QkFBd0IsSUFBSSxJQUFJLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRTtnQkFDbEUsUUFBUTtnQkFDUixRQUFRLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRO2FBQ2hDLENBQUMsQ0FBQztZQUVILE1BQU0sRUFBRSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDcEMsQ0FBQztLQUFBO0NBQ0Y7QUE5Q0QsOENBOENDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZnMgZnJvbSAnZnMtZXh0cmEnO1xuaW1wb3J0IHsgTG9nZ2VyLCBMb2dnZXJJbnN0YW5jZSB9IGZyb20gJ25hbm8tZXJyb3JzJztcbmltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgeyBCYXNlQ29uZmlnRGF0YSB9IGZyb20gJy4uL0Jhc2VDb25maWcnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEJhc2VDb25maWdTdG9yYWdlT3B0aW9ucyB7XG4gIG5hbWU6IHN0cmluZztcbiAgYmFzZVBhdGg6IHN0cmluZztcbiAgbG9nZ2VyPzogTG9nZ2VySW5zdGFuY2U7XG59XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYXNlQ29uZmlnU3RvcmFnZSB7XG4gIHB1YmxpYyBsb2dnZXI6IExvZ2dlckluc3RhbmNlO1xuICBwdWJsaWMgYWJzdHJhY3QgdHlwZTogc3RyaW5nO1xuICBwdWJsaWMgYWJzdHJhY3QgZXh0ZW5zaW9uOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHVibGljIG9wdGlvbnM6IEJhc2VDb25maWdTdG9yYWdlT3B0aW9ucykge1xuICAgIHRoaXMubG9nZ2VyID0gb3B0aW9ucy5sb2dnZXIgfHwgTG9nZ2VyLmdldEluc3RhbmNlKCk7XG4gIH1cblxuICBwdWJsaWMgYWJzdHJhY3QgbG9hZFN5bmMobmFtZT86IHN0cmluZywgcGF0aD86IHN0cmluZyk6IHZvaWQ7XG5cbiAgcHVibGljIGFic3RyYWN0IGFzeW5jIGR1bXAoZGF0YTogQmFzZUNvbmZpZ0RhdGEsIG5hbWU/OiBzdHJpbmcsIHBhdGg/OiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+O1xuXG4gIHByb3RlY3RlZCByZWFkU3luYyhvdmVycmlkZU5hbWU/OiBzdHJpbmcsIG92ZXJyaWRlUGF0aD86IHN0cmluZyk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgY29uc3QgbmFtZSA9IG92ZXJyaWRlTmFtZSB8fCB0aGlzLm9wdGlvbnMubmFtZTtcbiAgICBjb25zdCBmaWxlTmFtZSA9IGAke25hbWV9LiR7dGhpcy5leHRlbnNpb259YDtcbiAgICBjb25zdCBmaWxlUGF0aCA9IHBhdGguam9pbihvdmVycmlkZVBhdGggfHwgdGhpcy5vcHRpb25zLmJhc2VQYXRoLCBmaWxlTmFtZSk7XG5cbiAgICBpZiAoZnMuZXhpc3RzU3luYyhmaWxlUGF0aCkpIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGZzLnJlYWRGaWxlU3luYyhmaWxlUGF0aCkudG9TdHJpbmcoJ3V0Zi04Jyk7XG4gICAgICB0aGlzLmxvZ2dlci5kZWJ1ZyhgRW52aXJvbm1lbnQgY29uZmlnIGxvYWRlZCBzdWNjZXNzZnVsbHkgZnJvbSBcIiR7dGhpcy5vcHRpb25zLm5hbWV9LmVudlwiYCwge1xuICAgICAgICByZXN1bHQsXG4gICAgICAgIGJhc2VQYXRoOiB0aGlzLm9wdGlvbnMuYmFzZVBhdGgsXG4gICAgICB9KTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgdGhpcy5sb2dnZXIud2FybihgQ291bGQgbm90IGxvY2F0ZSBlbnZpcm9ubWVudCBmaWxlIGF0IFwiJHtmaWxlTmFtZX1cImApO1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICBwcm90ZWN0ZWQgYXN5bmMgd3JpdGUocmF3OiBzdHJpbmcsIG92ZXJyaWRlTmFtZT86IHN0cmluZywgb3ZlcnJpZGVQYXRoPzogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgbmFtZSA9IG92ZXJyaWRlTmFtZSB8fCB0aGlzLm9wdGlvbnMubmFtZTtcbiAgICBjb25zdCBmaWxlTmFtZSA9IGAke25hbWV9LiR7dGhpcy5leHRlbnNpb259YDtcbiAgICBjb25zdCBmaWxlUGF0aCA9IHBhdGguam9pbihvdmVycmlkZVBhdGggfHwgdGhpcy5vcHRpb25zLmJhc2VQYXRoLCBmaWxlTmFtZSk7XG5cbiAgICBhd2FpdCBmcy5lbnN1cmVEaXIodGhpcy5vcHRpb25zLmJhc2VQYXRoKTtcbiAgICBhd2FpdCBmcy5lbnN1cmVGaWxlKGZpbGVQYXRoKTtcblxuICAgIHRoaXMubG9nZ2VyLmluZm8oYFdyaXRpbmcgY29uZmlnIGZpbGUgJyR7bmFtZX0uJHt0aGlzLmV4dGVuc2lvbn0nYCwgeyBcbiAgICAgIGZpbGVOYW1lLFxuICAgICAgYmFzZVBhdGg6IHRoaXMub3B0aW9ucy5iYXNlUGF0aCBcbiAgICB9KTtcbiAgICBcbiAgICBhd2FpdCBmcy53cml0ZUZpbGUoZmlsZVBhdGgsIHJhdyk7XG4gIH1cbn0iXX0=