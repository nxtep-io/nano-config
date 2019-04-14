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
        this.convict = convict(this.options.schema || {
            env: {
                doc: '',
                format: ['production', 'development', 'test'],
                default: 'development',
                env: 'NODE_ENV'
            },
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTmFub0NvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2xpYi9OYW5vQ29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxtQ0FBbUM7QUFDbkMsaUNBQWlDO0FBQ2pDLCtCQUErQjtBQUMvQiw2Q0FBcUQ7QUFDckQsNkJBQTZCO0FBRTdCLHVDQUE4QztBQXVCOUMsTUFBYSxVQUFVO0lBS3JCLFlBQW1CLE9BQWdDO1FBQWhDLFlBQU8sR0FBUCxPQUFPLENBQXlCO1FBQ2pELElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsY0FBYyxDQUFDLENBQUM7UUFDckYsSUFBSSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxJQUFJLG9CQUFNLENBQUMsV0FBVyxFQUFFLENBQUM7UUFFckQsZ0NBQWdDO1FBQ2hDLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLE9BQU8sSUFBSSxJQUFJLDJCQUFpQixDQUFDO1lBQ3RELE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNuQixJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJO1lBQ3ZCLFFBQVEsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVE7U0FDaEMsQ0FBQyxDQUFDO1FBRUgsZ0NBQWdDO1FBQ2hDLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBYSxJQUFJO1lBQ3pELEdBQUcsRUFBRTtnQkFDSCxHQUFHLEVBQUUsRUFBRTtnQkFDUCxNQUFNLEVBQUUsQ0FBQyxZQUFZLEVBQUUsYUFBYSxFQUFFLE1BQU0sQ0FBQztnQkFDN0MsT0FBTyxFQUFFLGFBQWE7Z0JBQ3RCLEdBQUcsRUFBRSxVQUFVO2FBQ2hCO1NBQ0YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVNLE1BQU0sQ0FBQyxXQUFXLENBQ3RCLE9BQThDO1FBQy9DLE1BQU0sV0FBVyxHQUFHLE9BQU8sQ0FBQyxXQUFXLElBQUksT0FBTyxDQUFDLFFBQVEsSUFBSSxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDN0UsTUFBTSxPQUFPLEdBQUcsR0FBRyxPQUFPLENBQUMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxJQUFJLE1BQU0sQ0FBQztRQUN6RCxNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUVwRCw4Q0FBOEM7UUFDOUMsSUFBSSxFQUFFLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxFQUFFO1lBQzlCLE1BQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztZQUMxRSxNQUFNLE1BQU0sR0FBRyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUVqQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxnREFBZ0QsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLE9BQU8sRUFBRTtnQkFDOUYsT0FBTztnQkFDUCxXQUFXO2dCQUNYLEdBQUcsRUFBRSxNQUFNLENBQUMsTUFBTTthQUNuQixDQUFDLENBQUM7WUFFSCxPQUFPLE1BQU0sQ0FBQztTQUNmO1FBQUEsQ0FBQztRQUVGLDZCQUE2QjtRQUM3QixNQUFNLE1BQU0sR0FBRyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNqQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyx5Q0FBeUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxDQUFDO1FBQ3hGLE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFHTSxHQUFHLENBQWEsR0FBVztRQUNoQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFTSxHQUFHLENBQWEsR0FBVyxFQUFFLElBQVU7UUFDNUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLElBQVcsQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUE7SUFDMUMsQ0FBQztJQUVNLFFBQVE7UUFDYixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVZLElBQUksQ0FBQyxZQUFxQixFQUFFLFlBQXFCOztZQUM1RCxNQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsWUFBWSxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBQzFFLENBQUM7S0FBQTtDQUNGO0FBdEVELGdDQXNFQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGNvbnZpY3QgZnJvbSAnY29udmljdCc7XG5pbXBvcnQgKiBhcyBkb3RlbnYgZnJvbSAnZG90ZW52JztcbmltcG9ydCAqIGFzIGZzIGZyb20gJ2ZzLWV4dHJhJztcbmltcG9ydCB7IExvZ2dlciwgTG9nZ2VySW5zdGFuY2UgfSBmcm9tICduYW5vLWVycm9ycyc7XG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IHsgTmFub0NvbmZpZ1N0b3JhZ2UgfSBmcm9tICcuL05hbm9Db25maWdTdG9yYWdlJztcbmltcG9ydCB7IEpzb25Db25maWdTdG9yYWdlIH0gZnJvbSAnLi9zdG9yYWdlJztcblxuZXhwb3J0IHR5cGUgTmFub0NvbmZpZ1NjaGVtYTxEYXRhPiA9IGNvbnZpY3QuU2NoZW1hPERhdGE+O1xuXG5leHBvcnQgaW50ZXJmYWNlIE5hbm9Db25maWdEYXRhIHtcbiAgZW52Pzogc3RyaW5nO1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmFub0VudkZpbGUge1xuICBkZWJ1Zz86IGJvb2xlYW47XG4gIGVudk5hbWU/OiBzdHJpbmc7XG4gIGVudkJhc2VQYXRoPzogc3RyaW5nXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmFub0NvbmZpZ09wdGlvbnM8RGF0YSBleHRlbmRzIE5hbm9Db25maWdEYXRhID0geyBlbnY/OiBzdHJpbmcgfT4ge1xuICBuYW1lOiBzdHJpbmc7XG4gIGJhc2VQYXRoPzogc3RyaW5nO1xuICBsb2dnZXI/OiBMb2dnZXJJbnN0YW5jZTtcbiAgc3RvcmFnZT86IE5hbm9Db25maWdTdG9yYWdlO1xuICBzY2hlbWE/OiBQYXJ0aWFsPE5hbm9Db25maWdTY2hlbWE8RGF0YT4+XG59XG5cbmV4cG9ydCBjbGFzcyBOYW5vQ29uZmlnPERhdGEgZXh0ZW5kcyBOYW5vQ29uZmlnRGF0YSA9IHsgZW52Pzogc3RyaW5nIH0+IHtcbiAgcHVibGljIGxvZ2dlcjogTG9nZ2VySW5zdGFuY2U7XG4gIHByb3RlY3RlZCBzdG9yYWdlOiBOYW5vQ29uZmlnU3RvcmFnZTtcbiAgcHJvdGVjdGVkIGNvbnZpY3Q6IGNvbnZpY3QuQ29uZmlnPERhdGE+O1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBvcHRpb25zOiBOYW5vQ29uZmlnT3B0aW9uczxEYXRhPikge1xuICAgIHRoaXMub3B0aW9ucy5iYXNlUGF0aCA9IG9wdGlvbnMuYmFzZVBhdGggfHwgcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICcuL2NvbmZpZy9lbnYnKTtcbiAgICB0aGlzLmxvZ2dlciA9IG9wdGlvbnMubG9nZ2VyIHx8IExvZ2dlci5nZXRJbnN0YW5jZSgpO1xuXG4gICAgLy8gUHJlcGFyZSBjb25maWd1cmF0aW5vIHN0b3JhZ2VcbiAgICB0aGlzLnN0b3JhZ2UgPSBvcHRpb25zLnN0b3JhZ2UgfHwgbmV3IEpzb25Db25maWdTdG9yYWdlKHtcbiAgICAgIGxvZ2dlcjogdGhpcy5sb2dnZXIsXG4gICAgICBuYW1lOiB0aGlzLm9wdGlvbnMubmFtZSxcbiAgICAgIGJhc2VQYXRoOiB0aGlzLm9wdGlvbnMuYmFzZVBhdGhcbiAgICB9KTtcblxuICAgIC8vIFByZXBhcmUgY29uZmlndXJhdGlvbiBjb252aWN0XG4gICAgdGhpcy5jb252aWN0ID0gY29udmljdDxEYXRhPih0aGlzLm9wdGlvbnMuc2NoZW1hIGFzIGFueSB8fCB7XG4gICAgICBlbnY6IHtcbiAgICAgICAgZG9jOiAnJyxcbiAgICAgICAgZm9ybWF0OiBbJ3Byb2R1Y3Rpb24nLCAnZGV2ZWxvcG1lbnQnLCAndGVzdCddLFxuICAgICAgICBkZWZhdWx0OiAnZGV2ZWxvcG1lbnQnLFxuICAgICAgICBlbnY6ICdOT0RFX0VOVidcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGVudmlyb25tZW50PERhdGEgZXh0ZW5kcyBOYW5vQ29uZmlnRGF0YSA9IHsgZW52Pzogc3RyaW5nIH0+XG4gICAgKG9wdGlvbnM6IE5hbm9Db25maWdPcHRpb25zPERhdGE+ICYgTmFub0VudkZpbGUpOiBOYW5vQ29uZmlnPERhdGE+IHtcbiAgICBjb25zdCBlbnZCYXNlUGF0aCA9IG9wdGlvbnMuZW52QmFzZVBhdGggfHwgb3B0aW9ucy5iYXNlUGF0aCB8fCBwcm9jZXNzLmN3ZCgpO1xuICAgIGNvbnN0IGVudk5hbWUgPSBgJHtvcHRpb25zLmVudk5hbWUgfHwgb3B0aW9ucy5uYW1lfS5lbnZgO1xuICAgIGNvbnN0IGVudkZ1bGxQYXRoID0gcGF0aC5qb2luKGVudkJhc2VQYXRoLCBlbnZOYW1lKTtcblxuICAgIC8vIEVuc3VyZSBmaWxlIGV4aXN0cyBiZWZvcmUgdHJ5aW5nIHRvIGxhb2QgaXRcbiAgICBpZiAoZnMuZXhpc3RzU3luYyhlbnZGdWxsUGF0aCkpIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGRvdGVudi5jb25maWcoeyBwYXRoOiBlbnZGdWxsUGF0aCwgZGVidWc6IG9wdGlvbnMuZGVidWcgfSk7XG4gICAgICBjb25zdCBjb25maWcgPSBuZXcgdGhpcyhvcHRpb25zKTtcblxuICAgICAgY29uZmlnLmxvZ2dlci5kZWJ1ZyhgRW52aXJvbm1lbnQgY29uZmlnIGxvYWRlZCBzdWNjZXNzZnVsbHkgZnJvbSBcIiR7Y29uZmlnLm9wdGlvbnMubmFtZX0uZW52XCJgLCB7XG4gICAgICAgIGVudk5hbWUsXG4gICAgICAgIGVudkJhc2VQYXRoLFxuICAgICAgICBlbnY6IHJlc3VsdC5wYXJzZWQsXG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIGNvbmZpZztcbiAgICB9O1xuXG4gICAgLy8gSW5pdGlhbGl6ZSBhbiBlbXB0eSBjb25maWdcbiAgICBjb25zdCBjb25maWcgPSBuZXcgdGhpcyhvcHRpb25zKTtcbiAgICBjb25maWcubG9nZ2VyLndhcm4oYENvdWxkIG5vdCBsb2NhdGUgZW52aXJvbm1lbnQgZmlsZSBhdCBcIiR7Y29uZmlnLm9wdGlvbnMubmFtZX0uZW52XCJgKTtcbiAgICByZXR1cm4gY29uZmlnO1xuICB9XG5cbiAgcHVibGljIGdldChrZXk/OiBzdHJpbmcpOiBEYXRhO1xuICBwdWJsaWMgZ2V0PFR5cGUgPSBhbnk+KGtleTogc3RyaW5nKTogVHlwZSB7XG4gICAgcmV0dXJuIHRoaXMuY29udmljdC5nZXQoa2V5KTtcbiAgfVxuXG4gIHB1YmxpYyBzZXQ8VHlwZSA9IGFueT4oa2V5OiBzdHJpbmcsIGRhdGE6IFR5cGUpOiB2b2lkIHtcbiAgICB0aGlzLmNvbnZpY3Quc2V0KGtleSwgZGF0YSBhcyBhbnkpO1xuICAgIHRoaXMuY29udmljdC52YWxpZGF0ZSh7IHN0cmljdDogZmFsc2UgfSlcbiAgfVxuXG4gIHB1YmxpYyBsb2FkU3luYygpOiB2b2lkIHtcbiAgICB0aGlzLmNvbnZpY3QubG9hZCh0aGlzLnN0b3JhZ2UubG9hZFN5bmMoKSk7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgZHVtcChvdmVycmlkZU5hbWU/OiBzdHJpbmcsIG92ZXJyaWRlUGF0aD86IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgIGF3YWl0IHRoaXMuc3RvcmFnZS5kdW1wKHRoaXMuY29udmljdC5nZXQoKSwgb3ZlcnJpZGVOYW1lLCBvdmVycmlkZVBhdGgpO1xuICB9XG59XG4iXX0=