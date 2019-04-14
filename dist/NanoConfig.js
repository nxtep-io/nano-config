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
        const envName = `${options.envName || options.name || ''}.env`;
        const envFullPath = path.join(envBasePath, envName);
        // Ensure file exists before trying to laod it
        if (fs.existsSync(envFullPath)) {
            const result = dotenv.config({ path: envFullPath, debug: options.debug });
            const config = new NanoConfig(options);
            config.logger.debug(`Environment config loaded successfully from "${config.options.name}.env"`, {
                envName,
                envBasePath,
                env: result.parsed,
            });
            return config;
        }
        ;
        // Initialize an empty config
        const config = new NanoConfig(options);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTmFub0NvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2xpYi9OYW5vQ29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxtQ0FBbUM7QUFDbkMsaUNBQWlDO0FBQ2pDLCtCQUErQjtBQUMvQiw2Q0FBcUQ7QUFDckQsNkJBQTZCO0FBRTdCLHVDQUE4QztBQXFCOUMsTUFBYSxVQUFVO0lBS3JCLFlBQW1CLE9BQWdDO1FBQWhDLFlBQU8sR0FBUCxPQUFPLENBQXlCO1FBQ2pELElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsY0FBYyxDQUFDLENBQUM7UUFDckYsSUFBSSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxJQUFJLG9CQUFNLENBQUMsV0FBVyxFQUFFLENBQUM7UUFFckQsZ0NBQWdDO1FBQ2hDLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLE9BQU8sSUFBSSxJQUFJLDJCQUFpQixDQUFDO1lBQ3RELE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNuQixJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJO1lBQ3ZCLFFBQVEsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVE7U0FDaEMsQ0FBQyxDQUFDO1FBRUgsZ0NBQWdDO1FBQ2hDLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxpQkFDcEIsR0FBRyxFQUFFO2dCQUNILEdBQUcsRUFBRSxFQUFFO2dCQUNQLE1BQU0sRUFBRSxDQUFDLFlBQVksRUFBRSxhQUFhLEVBQUUsTUFBTSxDQUFDO2dCQUM3QyxPQUFPLEVBQUUsYUFBYTtnQkFDdEIsR0FBRyxFQUFFLFVBQVU7YUFDaEIsSUFDRSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFDdEIsQ0FBQztJQUNMLENBQUM7SUFFTSxNQUFNLENBQUMsV0FBVyxDQUN0QixPQUE4QztRQUMvQyxNQUFNLFdBQVcsR0FBRyxPQUFPLENBQUMsV0FBVyxJQUFJLE9BQU8sQ0FBQyxRQUFRLElBQUksT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQzdFLE1BQU0sT0FBTyxHQUFHLEdBQUcsT0FBTyxDQUFDLE9BQU8sSUFBSSxPQUFPLENBQUMsSUFBSSxJQUFJLEVBQUUsTUFBTSxDQUFDO1FBQy9ELE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRXBELDhDQUE4QztRQUM5QyxJQUFJLEVBQUUsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLEVBQUU7WUFDOUIsTUFBTSxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO1lBQzFFLE1BQU0sTUFBTSxHQUFHLElBQUksVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBRXZDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLGdEQUFnRCxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksT0FBTyxFQUFFO2dCQUM5RixPQUFPO2dCQUNQLFdBQVc7Z0JBQ1gsR0FBRyxFQUFFLE1BQU0sQ0FBQyxNQUFNO2FBQ25CLENBQUMsQ0FBQztZQUVILE9BQU8sTUFBTSxDQUFDO1NBQ2Y7UUFBQSxDQUFDO1FBRUYsNkJBQTZCO1FBQzdCLE1BQU0sTUFBTSxHQUFHLElBQUksVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFBO1FBQ3RDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLHlDQUF5QyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksT0FBTyxDQUFDLENBQUM7UUFDeEYsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUdNLEdBQUcsQ0FBYSxHQUFXO1FBQ2hDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVNLEdBQUcsQ0FBYSxHQUFXLEVBQUUsSUFBVTtRQUM1QyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsSUFBVyxDQUFDLENBQUM7UUFDbkMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQTtJQUMxQyxDQUFDO0lBRU0sUUFBUTtRQUNiLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRVksSUFBSSxDQUFDLFlBQXFCLEVBQUUsWUFBcUI7O1lBQzVELE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxZQUFZLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFDMUUsQ0FBQztLQUFBO0NBQ0Y7QUF2RUQsZ0NBdUVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgY29udmljdCBmcm9tICdjb252aWN0JztcbmltcG9ydCAqIGFzIGRvdGVudiBmcm9tICdkb3RlbnYnO1xuaW1wb3J0ICogYXMgZnMgZnJvbSAnZnMtZXh0cmEnO1xuaW1wb3J0IHsgTG9nZ2VyLCBMb2dnZXJJbnN0YW5jZSB9IGZyb20gJ25hbm8tZXJyb3JzJztcbmltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgeyBOYW5vQ29uZmlnU3RvcmFnZSB9IGZyb20gJy4vTmFub0NvbmZpZ1N0b3JhZ2UnO1xuaW1wb3J0IHsgSnNvbkNvbmZpZ1N0b3JhZ2UgfSBmcm9tICcuL3N0b3JhZ2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE5hbm9Db25maWdEYXRhIHtcbiAgZW52OiBzdHJpbmc7XG4gIFtrZXk6IHN0cmluZ106IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOYW5vRW52RmlsZSB7XG4gIGRlYnVnPzogYm9vbGVhbjtcbiAgZW52TmFtZT86IHN0cmluZztcbiAgZW52QmFzZVBhdGg/OiBzdHJpbmdcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOYW5vQ29uZmlnT3B0aW9uczxEYXRhIGV4dGVuZHMgTmFub0NvbmZpZ0RhdGEgPSB7IGVudjogc3RyaW5nIH0+IHtcbiAgbmFtZTogc3RyaW5nO1xuICBiYXNlUGF0aD86IHN0cmluZztcbiAgbG9nZ2VyPzogTG9nZ2VySW5zdGFuY2U7XG4gIHN0b3JhZ2U/OiBOYW5vQ29uZmlnU3RvcmFnZTtcbiAgc2NoZW1hPzogUGFydGlhbDxjb252aWN0LlNjaGVtYTxEYXRhPj5cbn1cblxuZXhwb3J0IGNsYXNzIE5hbm9Db25maWc8RGF0YSBleHRlbmRzIE5hbm9Db25maWdEYXRhID0geyBlbnY6IHN0cmluZyB9PiB7XG4gIHB1YmxpYyBsb2dnZXI6IExvZ2dlckluc3RhbmNlO1xuICBwcm90ZWN0ZWQgc3RvcmFnZTogTmFub0NvbmZpZ1N0b3JhZ2U7XG4gIHByb3RlY3RlZCBjb252aWN0OiBjb252aWN0LkNvbmZpZzxEYXRhPjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgb3B0aW9uczogTmFub0NvbmZpZ09wdGlvbnM8RGF0YT4pIHtcbiAgICB0aGlzLm9wdGlvbnMuYmFzZVBhdGggPSBvcHRpb25zLmJhc2VQYXRoIHx8IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAnLi9jb25maWcvZW52Jyk7XG4gICAgdGhpcy5sb2dnZXIgPSBvcHRpb25zLmxvZ2dlciB8fCBMb2dnZXIuZ2V0SW5zdGFuY2UoKTtcblxuICAgIC8vIFByZXBhcmUgY29uZmlndXJhdGlubyBzdG9yYWdlXG4gICAgdGhpcy5zdG9yYWdlID0gb3B0aW9ucy5zdG9yYWdlIHx8IG5ldyBKc29uQ29uZmlnU3RvcmFnZSh7XG4gICAgICBsb2dnZXI6IHRoaXMubG9nZ2VyLFxuICAgICAgbmFtZTogdGhpcy5vcHRpb25zLm5hbWUsXG4gICAgICBiYXNlUGF0aDogdGhpcy5vcHRpb25zLmJhc2VQYXRoXG4gICAgfSk7XG5cbiAgICAvLyBQcmVwYXJlIGNvbmZpZ3VyYXRpb24gY29udmljdFxuICAgIHRoaXMuY29udmljdCA9IGNvbnZpY3Q8YW55Pih7XG4gICAgICBlbnY6IHtcbiAgICAgICAgZG9jOiAnJyxcbiAgICAgICAgZm9ybWF0OiBbJ3Byb2R1Y3Rpb24nLCAnZGV2ZWxvcG1lbnQnLCAndGVzdCddLFxuICAgICAgICBkZWZhdWx0OiAnZGV2ZWxvcG1lbnQnLFxuICAgICAgICBlbnY6ICdOT0RFX0VOVidcbiAgICAgIH0sXG4gICAgICAuLi50aGlzLm9wdGlvbnMuc2NoZW1hLFxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBlbnZpcm9ubWVudDxEYXRhIGV4dGVuZHMgTmFub0NvbmZpZ0RhdGEgPSB7IGVudjogc3RyaW5nIH0+XG4gICAgKG9wdGlvbnM6IE5hbm9Db25maWdPcHRpb25zPERhdGE+ICYgTmFub0VudkZpbGUpOiBOYW5vQ29uZmlnPERhdGE+IHtcbiAgICBjb25zdCBlbnZCYXNlUGF0aCA9IG9wdGlvbnMuZW52QmFzZVBhdGggfHwgb3B0aW9ucy5iYXNlUGF0aCB8fCBwcm9jZXNzLmN3ZCgpO1xuICAgIGNvbnN0IGVudk5hbWUgPSBgJHtvcHRpb25zLmVudk5hbWUgfHwgb3B0aW9ucy5uYW1lIHx8ICcnfS5lbnZgO1xuICAgIGNvbnN0IGVudkZ1bGxQYXRoID0gcGF0aC5qb2luKGVudkJhc2VQYXRoLCBlbnZOYW1lKTtcblxuICAgIC8vIEVuc3VyZSBmaWxlIGV4aXN0cyBiZWZvcmUgdHJ5aW5nIHRvIGxhb2QgaXRcbiAgICBpZiAoZnMuZXhpc3RzU3luYyhlbnZGdWxsUGF0aCkpIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGRvdGVudi5jb25maWcoeyBwYXRoOiBlbnZGdWxsUGF0aCwgZGVidWc6IG9wdGlvbnMuZGVidWcgfSk7XG4gICAgICBjb25zdCBjb25maWcgPSBuZXcgTmFub0NvbmZpZyhvcHRpb25zKTtcblxuICAgICAgY29uZmlnLmxvZ2dlci5kZWJ1ZyhgRW52aXJvbm1lbnQgY29uZmlnIGxvYWRlZCBzdWNjZXNzZnVsbHkgZnJvbSBcIiR7Y29uZmlnLm9wdGlvbnMubmFtZX0uZW52XCJgLCB7XG4gICAgICAgIGVudk5hbWUsXG4gICAgICAgIGVudkJhc2VQYXRoLFxuICAgICAgICBlbnY6IHJlc3VsdC5wYXJzZWQsXG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIGNvbmZpZztcbiAgICB9O1xuXG4gICAgLy8gSW5pdGlhbGl6ZSBhbiBlbXB0eSBjb25maWdcbiAgICBjb25zdCBjb25maWcgPSBuZXcgTmFub0NvbmZpZyhvcHRpb25zKVxuICAgIGNvbmZpZy5sb2dnZXIud2FybihgQ291bGQgbm90IGxvY2F0ZSBlbnZpcm9ubWVudCBmaWxlIGF0IFwiJHtjb25maWcub3B0aW9ucy5uYW1lfS5lbnZcImApO1xuICAgIHJldHVybiBjb25maWc7XG4gIH1cblxuICBwdWJsaWMgZ2V0KGtleT86IHN0cmluZyk6IERhdGE7XG4gIHB1YmxpYyBnZXQ8VHlwZSA9IGFueT4oa2V5OiBzdHJpbmcpOiBUeXBlIHtcbiAgICByZXR1cm4gdGhpcy5jb252aWN0LmdldChrZXkpO1xuICB9XG5cbiAgcHVibGljIHNldDxUeXBlID0gYW55PihrZXk6IHN0cmluZywgZGF0YTogVHlwZSk6IHZvaWQge1xuICAgIHRoaXMuY29udmljdC5zZXQoa2V5LCBkYXRhIGFzIGFueSk7XG4gICAgdGhpcy5jb252aWN0LnZhbGlkYXRlKHsgc3RyaWN0OiBmYWxzZSB9KVxuICB9XG5cbiAgcHVibGljIGxvYWRTeW5jKCk6IHZvaWQge1xuICAgIHRoaXMuY29udmljdC5sb2FkKHRoaXMuc3RvcmFnZS5sb2FkU3luYygpKTtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBkdW1wKG92ZXJyaWRlTmFtZT86IHN0cmluZywgb3ZlcnJpZGVQYXRoPzogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgYXdhaXQgdGhpcy5zdG9yYWdlLmR1bXAodGhpcy5jb252aWN0LmdldCgpLCBvdmVycmlkZU5hbWUsIG92ZXJyaWRlUGF0aCk7XG4gIH1cbn1cbiJdfQ==