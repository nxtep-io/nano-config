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
const dotenv = require("dotenv");
const fs = require("fs-extra");
const nano_errors_1 = require("nano-errors");
const path = require("path");
const storage_1 = require("./storage");
class NanoConfig {
    constructor(options) {
        this.options = options;
        this.options.basePath = options.basePath || path.join(process.cwd(), './config/env');
        this.logger = options.logger || nano_errors_1.Logger.getInstance();
        // Prepare configuratino storage
        this.storage = options.storage || new storage_1.JsonConfigStorage({
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
    static environment(options) {
        const envBasePath = options.envBasePath || options.basePath || process.cwd();
        const envName = `${options.envName || options.name}.env`;
        const envFullPath = path.join(envBasePath, envName);
        // Ensure file exists before trying to laod it
        if (fs.existsSync(envFullPath)) {
            const result = dotenv.config({ path: envFullPath, debug: options.debug });
            const config = new this(options);
            config.logger.debug(`Environment config loaded successfully from "${config.options.name}.env"`, {
                envName,
                envBasePath,
                env: result.parsed,
            });
            return config;
        }
        ;
        // Initialize an empty config
        const config = new this(options);
        config.logger.warn(`Could not locate environment file at "${config.options.name}.env"`);
        return config;
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
exports.NanoConfig = NanoConfig;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTmFub0NvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2xpYi9OYW5vQ29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxtQ0FBbUM7QUFDbkMsaUNBQWlDO0FBQ2pDLCtCQUErQjtBQUMvQiw2Q0FBcUQ7QUFDckQsNkJBQTZCO0FBRTdCLHVDQUE4QztBQXVCOUMsTUFBYSxVQUFVO0lBS3JCLFlBQW1CLE9BQWdDO1FBQWhDLFlBQU8sR0FBUCxPQUFPLENBQXlCO1FBQ2pELElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsY0FBYyxDQUFDLENBQUM7UUFDckYsSUFBSSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxJQUFJLG9CQUFNLENBQUMsV0FBVyxFQUFFLENBQUM7UUFFckQsZ0NBQWdDO1FBQ2hDLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLE9BQU8sSUFBSSxJQUFJLDJCQUFpQixDQUFDO1lBQ3RELE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNuQixJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJO1lBQ3ZCLFFBQVEsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVE7U0FDaEMsQ0FBQyxDQUFDO1FBRUgsZ0NBQWdDO1FBQ2hDLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxpQkFDcEIsR0FBRyxFQUFFO2dCQUNILEdBQUcsRUFBRSxFQUFFO2dCQUNQLE1BQU0sRUFBRSxDQUFDLFlBQVksRUFBRSxhQUFhLEVBQUUsTUFBTSxDQUFDO2dCQUM3QyxPQUFPLEVBQUUsYUFBYTtnQkFDdEIsR0FBRyxFQUFFLFVBQVU7YUFDaEIsSUFDRSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFDdEIsQ0FBQztJQUNMLENBQUM7SUFFTSxNQUFNLENBQUMsV0FBVyxDQUN0QixPQUE4QztRQUMvQyxNQUFNLFdBQVcsR0FBRyxPQUFPLENBQUMsV0FBVyxJQUFJLE9BQU8sQ0FBQyxRQUFRLElBQUksT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQzdFLE1BQU0sT0FBTyxHQUFHLEdBQUcsT0FBTyxDQUFDLE9BQU8sSUFBSSxPQUFPLENBQUMsSUFBSSxNQUFNLENBQUM7UUFDekQsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFFcEQsOENBQThDO1FBQzlDLElBQUksRUFBRSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsRUFBRTtZQUM5QixNQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7WUFDMUUsTUFBTSxNQUFNLEdBQUcsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFFakMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsZ0RBQWdELE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxPQUFPLEVBQUU7Z0JBQzlGLE9BQU87Z0JBQ1AsV0FBVztnQkFDWCxHQUFHLEVBQUUsTUFBTSxDQUFDLE1BQU07YUFDbkIsQ0FBQyxDQUFDO1lBRUgsT0FBTyxNQUFNLENBQUM7U0FDZjtRQUFBLENBQUM7UUFFRiw2QkFBNkI7UUFDN0IsTUFBTSxNQUFNLEdBQUcsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDakMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMseUNBQXlDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxPQUFPLENBQUMsQ0FBQztRQUN4RixPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0lBR00sR0FBRyxDQUFhLEdBQVc7UUFDaEMsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRU0sR0FBRyxDQUFhLEdBQVcsRUFBRSxJQUFVO1FBQzVDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxJQUFXLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFBO0lBQzFDLENBQUM7SUFFTSxRQUFRO1FBQ2IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFWSxJQUFJLENBQUMsWUFBcUIsRUFBRSxZQUFxQjs7WUFDNUQsTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLFlBQVksRUFBRSxZQUFZLENBQUMsQ0FBQztRQUMxRSxDQUFDO0tBQUE7Q0FDRjtBQXZFRCxnQ0F1RUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBjb252aWN0IGZyb20gJ2NvbnZpY3QnO1xuaW1wb3J0ICogYXMgZG90ZW52IGZyb20gJ2RvdGVudic7XG5pbXBvcnQgKiBhcyBmcyBmcm9tICdmcy1leHRyYSc7XG5pbXBvcnQgeyBMb2dnZXIsIExvZ2dlckluc3RhbmNlIH0gZnJvbSAnbmFuby1lcnJvcnMnO1xuaW1wb3J0ICogYXMgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCB7IE5hbm9Db25maWdTdG9yYWdlIH0gZnJvbSAnLi9OYW5vQ29uZmlnU3RvcmFnZSc7XG5pbXBvcnQgeyBKc29uQ29uZmlnU3RvcmFnZSB9IGZyb20gJy4vc3RvcmFnZSc7XG5cbmV4cG9ydCB0eXBlIE5hbm9Db25maWdTY2hlbWE8RGF0YT4gPSBjb252aWN0LlNjaGVtYTxEYXRhPjtcblxuZXhwb3J0IGludGVyZmFjZSBOYW5vQ29uZmlnRGF0YSB7XG4gIGVudj86IHN0cmluZztcbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5hbm9FbnZGaWxlIHtcbiAgZGVidWc/OiBib29sZWFuO1xuICBlbnZOYW1lPzogc3RyaW5nO1xuICBlbnZCYXNlUGF0aD86IHN0cmluZ1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5hbm9Db25maWdPcHRpb25zPERhdGEgZXh0ZW5kcyBOYW5vQ29uZmlnRGF0YSA9IHsgZW52OiBzdHJpbmcgfT4ge1xuICBuYW1lOiBzdHJpbmc7XG4gIGJhc2VQYXRoPzogc3RyaW5nO1xuICBsb2dnZXI/OiBMb2dnZXJJbnN0YW5jZTtcbiAgc3RvcmFnZT86IE5hbm9Db25maWdTdG9yYWdlO1xuICBzY2hlbWE/OiBQYXJ0aWFsPE5hbm9Db25maWdTY2hlbWE8RGF0YT4+XG59XG5cbmV4cG9ydCBjbGFzcyBOYW5vQ29uZmlnPERhdGEgZXh0ZW5kcyBOYW5vQ29uZmlnRGF0YSA9IHsgZW52OiBzdHJpbmcgfT4ge1xuICBwdWJsaWMgbG9nZ2VyOiBMb2dnZXJJbnN0YW5jZTtcbiAgcHJvdGVjdGVkIHN0b3JhZ2U6IE5hbm9Db25maWdTdG9yYWdlO1xuICBwcm90ZWN0ZWQgY29udmljdDogY29udmljdC5Db25maWc8RGF0YT47XG5cbiAgY29uc3RydWN0b3IocHVibGljIG9wdGlvbnM6IE5hbm9Db25maWdPcHRpb25zPERhdGE+KSB7XG4gICAgdGhpcy5vcHRpb25zLmJhc2VQYXRoID0gb3B0aW9ucy5iYXNlUGF0aCB8fCBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgJy4vY29uZmlnL2VudicpO1xuICAgIHRoaXMubG9nZ2VyID0gb3B0aW9ucy5sb2dnZXIgfHwgTG9nZ2VyLmdldEluc3RhbmNlKCk7XG5cbiAgICAvLyBQcmVwYXJlIGNvbmZpZ3VyYXRpbm8gc3RvcmFnZVxuICAgIHRoaXMuc3RvcmFnZSA9IG9wdGlvbnMuc3RvcmFnZSB8fCBuZXcgSnNvbkNvbmZpZ1N0b3JhZ2Uoe1xuICAgICAgbG9nZ2VyOiB0aGlzLmxvZ2dlcixcbiAgICAgIG5hbWU6IHRoaXMub3B0aW9ucy5uYW1lLFxuICAgICAgYmFzZVBhdGg6IHRoaXMub3B0aW9ucy5iYXNlUGF0aFxuICAgIH0pO1xuXG4gICAgLy8gUHJlcGFyZSBjb25maWd1cmF0aW9uIGNvbnZpY3RcbiAgICB0aGlzLmNvbnZpY3QgPSBjb252aWN0PERhdGE+KHtcbiAgICAgIGVudjoge1xuICAgICAgICBkb2M6ICcnLFxuICAgICAgICBmb3JtYXQ6IFsncHJvZHVjdGlvbicsICdkZXZlbG9wbWVudCcsICd0ZXN0J10sXG4gICAgICAgIGRlZmF1bHQ6ICdkZXZlbG9wbWVudCcsXG4gICAgICAgIGVudjogJ05PREVfRU5WJ1xuICAgICAgfSxcbiAgICAgIC4uLnRoaXMub3B0aW9ucy5zY2hlbWEsXG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGVudmlyb25tZW50PERhdGEgZXh0ZW5kcyBOYW5vQ29uZmlnRGF0YSA9IHsgZW52OiBzdHJpbmcgfT5cbiAgICAob3B0aW9uczogTmFub0NvbmZpZ09wdGlvbnM8RGF0YT4gJiBOYW5vRW52RmlsZSk6IE5hbm9Db25maWc8RGF0YT4ge1xuICAgIGNvbnN0IGVudkJhc2VQYXRoID0gb3B0aW9ucy5lbnZCYXNlUGF0aCB8fCBvcHRpb25zLmJhc2VQYXRoIHx8IHByb2Nlc3MuY3dkKCk7XG4gICAgY29uc3QgZW52TmFtZSA9IGAke29wdGlvbnMuZW52TmFtZSB8fCBvcHRpb25zLm5hbWV9LmVudmA7XG4gICAgY29uc3QgZW52RnVsbFBhdGggPSBwYXRoLmpvaW4oZW52QmFzZVBhdGgsIGVudk5hbWUpO1xuXG4gICAgLy8gRW5zdXJlIGZpbGUgZXhpc3RzIGJlZm9yZSB0cnlpbmcgdG8gbGFvZCBpdFxuICAgIGlmIChmcy5leGlzdHNTeW5jKGVudkZ1bGxQYXRoKSkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gZG90ZW52LmNvbmZpZyh7IHBhdGg6IGVudkZ1bGxQYXRoLCBkZWJ1Zzogb3B0aW9ucy5kZWJ1ZyB9KTtcbiAgICAgIGNvbnN0IGNvbmZpZyA9IG5ldyB0aGlzKG9wdGlvbnMpO1xuXG4gICAgICBjb25maWcubG9nZ2VyLmRlYnVnKGBFbnZpcm9ubWVudCBjb25maWcgbG9hZGVkIHN1Y2Nlc3NmdWxseSBmcm9tIFwiJHtjb25maWcub3B0aW9ucy5uYW1lfS5lbnZcImAsIHtcbiAgICAgICAgZW52TmFtZSxcbiAgICAgICAgZW52QmFzZVBhdGgsXG4gICAgICAgIGVudjogcmVzdWx0LnBhcnNlZCxcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gY29uZmlnO1xuICAgIH07XG5cbiAgICAvLyBJbml0aWFsaXplIGFuIGVtcHR5IGNvbmZpZ1xuICAgIGNvbnN0IGNvbmZpZyA9IG5ldyB0aGlzKG9wdGlvbnMpO1xuICAgIGNvbmZpZy5sb2dnZXIud2FybihgQ291bGQgbm90IGxvY2F0ZSBlbnZpcm9ubWVudCBmaWxlIGF0IFwiJHtjb25maWcub3B0aW9ucy5uYW1lfS5lbnZcImApO1xuICAgIHJldHVybiBjb25maWc7XG4gIH1cblxuICBwdWJsaWMgZ2V0KGtleT86IHN0cmluZyk6IERhdGE7XG4gIHB1YmxpYyBnZXQ8VHlwZSA9IGFueT4oa2V5OiBzdHJpbmcpOiBUeXBlIHtcbiAgICByZXR1cm4gdGhpcy5jb252aWN0LmdldChrZXkpO1xuICB9XG5cbiAgcHVibGljIHNldDxUeXBlID0gYW55PihrZXk6IHN0cmluZywgZGF0YTogVHlwZSk6IHZvaWQge1xuICAgIHRoaXMuY29udmljdC5zZXQoa2V5LCBkYXRhIGFzIGFueSk7XG4gICAgdGhpcy5jb252aWN0LnZhbGlkYXRlKHsgc3RyaWN0OiBmYWxzZSB9KVxuICB9XG5cbiAgcHVibGljIGxvYWRTeW5jKCk6IHZvaWQge1xuICAgIHRoaXMuY29udmljdC5sb2FkKHRoaXMuc3RvcmFnZS5sb2FkU3luYygpKTtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBkdW1wKG92ZXJyaWRlTmFtZT86IHN0cmluZywgb3ZlcnJpZGVQYXRoPzogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgYXdhaXQgdGhpcy5zdG9yYWdlLmR1bXAodGhpcy5jb252aWN0LmdldCgpLCBvdmVycmlkZU5hbWUsIG92ZXJyaWRlUGF0aCk7XG4gIH1cbn1cbiJdfQ==