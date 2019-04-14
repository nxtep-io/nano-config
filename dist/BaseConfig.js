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
const convict = require("convict");
const nano_errors_1 = require("nano-errors");
const path = require("path");
const storage_1 = require("./storage");
class BaseConfig {
    constructor(options) {
        this.options = options;
        this.options.basePath = options.basePath || path.join(process.cwd(), './config/env');
        this.logger = options.logger || nano_errors_1.Logger.getInstance();
        // Prepare configuratino storage
        this.storage = options.storage || new storage_1.EnvConfigStorage({
            logger: this.logger,
            name: this.options.name,
            basePath: this.options.basePath
        });
        // Prepare configuration convict
        this.convict = convict(Object.assign({ env: {
                doc: '',
                format: ['production', 'development', 'test'],
                default: 'development',
                env: 'NODE_ENV'
            } }, this.options.schema));
    }
    get(key) {
        return this.convict.get(key);
    }
    set(key, data) {
        this.convict.set(key, data);
        this.convict.validate({ strict: false });
    }
    loadSync() {
        this.convict.load(this.storage.loadSync());
    }
    dump(overrideName, overridePath) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.storage.dump(this.convict.get(), overrideName, overridePath);
        });
    }
}
exports.BaseConfig = BaseConfig;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZUNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2xpYi9CYXNlQ29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxtQ0FBbUM7QUFDbkMsNkNBQXFEO0FBQ3JELDZCQUE2QjtBQUM3Qix1Q0FBZ0U7QUFnQmhFLE1BQWEsVUFBVTtJQUtyQixZQUFtQixPQUFnQztRQUFoQyxZQUFPLEdBQVAsT0FBTyxDQUF5QjtRQUNqRCxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLGNBQWMsQ0FBQyxDQUFDO1FBQ3JGLElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sSUFBSSxvQkFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBRXJELGdDQUFnQztRQUNoQyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxPQUFPLElBQUksSUFBSSwwQkFBZ0IsQ0FBQztZQUNyRCxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbkIsSUFBSSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSTtZQUN2QixRQUFRLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRO1NBQ2hDLENBQUMsQ0FBQztRQUVILGdDQUFnQztRQUNoQyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8saUJBQ3BCLEdBQUcsRUFBRTtnQkFDSCxHQUFHLEVBQUUsRUFBRTtnQkFDUCxNQUFNLEVBQUUsQ0FBQyxZQUFZLEVBQUUsYUFBYSxFQUFFLE1BQU0sQ0FBQztnQkFDN0MsT0FBTyxFQUFFLGFBQWE7Z0JBQ3RCLEdBQUcsRUFBRSxVQUFVO2FBQ2hCLElBQ0UsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQ3RCLENBQUM7SUFDTCxDQUFDO0lBR00sR0FBRyxDQUFhLEdBQVc7UUFDaEMsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRU0sR0FBRyxDQUFhLEdBQVcsRUFBRSxJQUFVO1FBQzVDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxJQUFXLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFBO0lBQzFDLENBQUM7SUFFTSxRQUFRO1FBQ2IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFWSxJQUFJLENBQUMsWUFBcUIsRUFBRSxZQUFxQjs7WUFDNUQsTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLFlBQVksRUFBRSxZQUFZLENBQUMsQ0FBQztRQUMxRSxDQUFDO0tBQUE7Q0FDRjtBQTdDRCxnQ0E2Q0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBjb252aWN0IGZyb20gJ2NvbnZpY3QnO1xuaW1wb3J0IHsgTG9nZ2VyLCBMb2dnZXJJbnN0YW5jZSB9IGZyb20gJ25hbm8tZXJyb3JzJztcbmltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgeyBCYXNlQ29uZmlnU3RvcmFnZSwgRW52Q29uZmlnU3RvcmFnZSB9IGZyb20gJy4vc3RvcmFnZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQmFzZUNvbmZpZ0RhdGEge1xuICBlbnY6IHN0cmluZztcbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEJhc2VDb25maWdPcHRpb25zPERhdGEgZXh0ZW5kcyBCYXNlQ29uZmlnRGF0YSA9IHsgZW52OiBzdHJpbmcgfT4ge1xuICBuYW1lOiBzdHJpbmc7XG4gIGJhc2VQYXRoPzogc3RyaW5nO1xuICBsb2dnZXI/OiBMb2dnZXJJbnN0YW5jZTtcbiAgZGVidWc/OiBib29sZWFuO1xuICBzdG9yYWdlPzogQmFzZUNvbmZpZ1N0b3JhZ2U7XG4gIHNjaGVtYT86IFBhcnRpYWw8Y29udmljdC5TY2hlbWE8RGF0YT4+XG59XG5cbmV4cG9ydCBjbGFzcyBCYXNlQ29uZmlnPERhdGEgZXh0ZW5kcyBCYXNlQ29uZmlnRGF0YSA9IHsgZW52OiBzdHJpbmcgfT4ge1xuICBwcm90ZWN0ZWQgbG9nZ2VyOiBMb2dnZXJJbnN0YW5jZTtcbiAgcHJvdGVjdGVkIHN0b3JhZ2U6IEJhc2VDb25maWdTdG9yYWdlO1xuICBwcm90ZWN0ZWQgY29udmljdDogY29udmljdC5Db25maWc8RGF0YT47XG5cbiAgY29uc3RydWN0b3IocHVibGljIG9wdGlvbnM6IEJhc2VDb25maWdPcHRpb25zPERhdGE+KSB7XG4gICAgdGhpcy5vcHRpb25zLmJhc2VQYXRoID0gb3B0aW9ucy5iYXNlUGF0aCB8fCBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgJy4vY29uZmlnL2VudicpO1xuICAgIHRoaXMubG9nZ2VyID0gb3B0aW9ucy5sb2dnZXIgfHwgTG9nZ2VyLmdldEluc3RhbmNlKCk7XG5cbiAgICAvLyBQcmVwYXJlIGNvbmZpZ3VyYXRpbm8gc3RvcmFnZVxuICAgIHRoaXMuc3RvcmFnZSA9IG9wdGlvbnMuc3RvcmFnZSB8fCBuZXcgRW52Q29uZmlnU3RvcmFnZSh7XG4gICAgICBsb2dnZXI6IHRoaXMubG9nZ2VyLFxuICAgICAgbmFtZTogdGhpcy5vcHRpb25zLm5hbWUsXG4gICAgICBiYXNlUGF0aDogdGhpcy5vcHRpb25zLmJhc2VQYXRoXG4gICAgfSk7XG5cbiAgICAvLyBQcmVwYXJlIGNvbmZpZ3VyYXRpb24gY29udmljdFxuICAgIHRoaXMuY29udmljdCA9IGNvbnZpY3Q8YW55Pih7XG4gICAgICBlbnY6IHtcbiAgICAgICAgZG9jOiAnJyxcbiAgICAgICAgZm9ybWF0OiBbJ3Byb2R1Y3Rpb24nLCAnZGV2ZWxvcG1lbnQnLCAndGVzdCddLFxuICAgICAgICBkZWZhdWx0OiAnZGV2ZWxvcG1lbnQnLFxuICAgICAgICBlbnY6ICdOT0RFX0VOVidcbiAgICAgIH0sXG4gICAgICAuLi50aGlzLm9wdGlvbnMuc2NoZW1hLFxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGdldChrZXk/OiBzdHJpbmcpOiBEYXRhO1xuICBwdWJsaWMgZ2V0PFR5cGUgPSBhbnk+KGtleTogc3RyaW5nKTogVHlwZSB7XG4gICAgcmV0dXJuIHRoaXMuY29udmljdC5nZXQoa2V5KTtcbiAgfVxuXG4gIHB1YmxpYyBzZXQ8VHlwZSA9IGFueT4oa2V5OiBzdHJpbmcsIGRhdGE6IFR5cGUpOiB2b2lkIHtcbiAgICB0aGlzLmNvbnZpY3Quc2V0KGtleSwgZGF0YSBhcyBhbnkpO1xuICAgIHRoaXMuY29udmljdC52YWxpZGF0ZSh7IHN0cmljdDogZmFsc2UgfSlcbiAgfVxuXG4gIHB1YmxpYyBsb2FkU3luYygpOiB2b2lkIHtcbiAgICB0aGlzLmNvbnZpY3QubG9hZCh0aGlzLnN0b3JhZ2UubG9hZFN5bmMoKSk7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgZHVtcChvdmVycmlkZU5hbWU/OiBzdHJpbmcsIG92ZXJyaWRlUGF0aD86IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgIGF3YWl0IHRoaXMuc3RvcmFnZS5kdW1wKHRoaXMuY29udmljdC5nZXQoKSwgb3ZlcnJpZGVOYW1lLCBvdmVycmlkZVBhdGgpO1xuICB9XG59XG4iXX0=