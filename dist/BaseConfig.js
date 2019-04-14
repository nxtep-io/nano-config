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
        this.convict = convict({
            env: {
                doc: '',
                format: ['production', 'development', 'nightly', 'testnet'],
                default: 'development',
                env: 'NODE_ENV'
            }
        });
    }
    get(key) {
        return this.convict.get(key);
    }
    set(key, data) {
        this.convict.set(key, data);
    }
    loadSync() {
        this.convict.load(this.storage.loadSync());
    }
    dump(overrideName, overridePath) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.storage.dump(this.storage.loadSync(), overrideName, overridePath);
        });
    }
}
exports.BaseConfig = BaseConfig;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZUNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2xpYi9CYXNlQ29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxtQ0FBbUM7QUFDbkMsNkNBQXFEO0FBQ3JELDZCQUE2QjtBQUM3Qix1Q0FBZ0U7QUFlaEUsTUFBYSxVQUFVO0lBS3JCLFlBQW1CLE9BQWdDO1FBQWhDLFlBQU8sR0FBUCxPQUFPLENBQXlCO1FBQ2pELElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsY0FBYyxDQUFDLENBQUM7UUFDckYsSUFBSSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxJQUFJLG9CQUFNLENBQUMsV0FBVyxFQUFFLENBQUM7UUFFckQsZ0NBQWdDO1FBQ2hDLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLE9BQU8sSUFBSSxJQUFJLDBCQUFnQixDQUFDO1lBQ3JELE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNuQixJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJO1lBQ3ZCLFFBQVEsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVE7U0FDaEMsQ0FBQyxDQUFDO1FBRUgsZ0NBQWdDO1FBQ2hDLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFNO1lBQzFCLEdBQUcsRUFBRTtnQkFDSCxHQUFHLEVBQUUsRUFBRTtnQkFDUCxNQUFNLEVBQUUsQ0FBQyxZQUFZLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSxTQUFTLENBQUM7Z0JBQzNELE9BQU8sRUFBRSxhQUFhO2dCQUN0QixHQUFHLEVBQUUsVUFBVTthQUNoQjtTQUNGLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTSxHQUFHLENBQWEsR0FBVztRQUNoQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFTSxHQUFHLENBQWEsR0FBVyxFQUFFLElBQVU7UUFDNUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLElBQVcsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFTSxRQUFRO1FBQ2IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFWSxJQUFJLENBQUMsWUFBcUIsRUFBRSxZQUFxQjs7WUFDNUQsTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxFQUFFLFlBQVksRUFBRSxZQUFZLENBQUMsQ0FBQztRQUMvRSxDQUFDO0tBQUE7Q0FDRjtBQTFDRCxnQ0EwQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBjb252aWN0IGZyb20gJ2NvbnZpY3QnO1xuaW1wb3J0IHsgTG9nZ2VyLCBMb2dnZXJJbnN0YW5jZSB9IGZyb20gJ25hbm8tZXJyb3JzJztcbmltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgeyBCYXNlQ29uZmlnU3RvcmFnZSwgRW52Q29uZmlnU3RvcmFnZSB9IGZyb20gJy4vc3RvcmFnZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQmFzZUNvbmZpZ0RhdGEge1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQmFzZUNvbmZpZ09wdGlvbnM8RGF0YSBleHRlbmRzIEJhc2VDb25maWdEYXRhPiAge1xuICBuYW1lOiBzdHJpbmc7XG4gIGJhc2VQYXRoPzogc3RyaW5nO1xuICBsb2dnZXI/OiBMb2dnZXJJbnN0YW5jZTtcbiAgZGVidWc/OiBib29sZWFuO1xuICBzdG9yYWdlPzogQmFzZUNvbmZpZ1N0b3JhZ2U7XG4gIHNjaGVtYT86IGNvbnZpY3QuU2NoZW1hPERhdGE+XG59XG5cbmV4cG9ydCBjbGFzcyBCYXNlQ29uZmlnPERhdGEgZXh0ZW5kcyBCYXNlQ29uZmlnRGF0YSA9IHt9PiB7XG4gIHByb3RlY3RlZCBsb2dnZXI6IExvZ2dlckluc3RhbmNlO1xuICBwcm90ZWN0ZWQgc3RvcmFnZTogQmFzZUNvbmZpZ1N0b3JhZ2U7XG4gIHByb3RlY3RlZCBjb252aWN0OiBjb252aWN0LkNvbmZpZzxEYXRhPjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgb3B0aW9uczogQmFzZUNvbmZpZ09wdGlvbnM8RGF0YT4pIHtcbiAgICB0aGlzLm9wdGlvbnMuYmFzZVBhdGggPSBvcHRpb25zLmJhc2VQYXRoIHx8IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAnLi9jb25maWcvZW52Jyk7XG4gICAgdGhpcy5sb2dnZXIgPSBvcHRpb25zLmxvZ2dlciB8fCBMb2dnZXIuZ2V0SW5zdGFuY2UoKTtcblxuICAgIC8vIFByZXBhcmUgY29uZmlndXJhdGlubyBzdG9yYWdlXG4gICAgdGhpcy5zdG9yYWdlID0gb3B0aW9ucy5zdG9yYWdlIHx8IG5ldyBFbnZDb25maWdTdG9yYWdlKHtcbiAgICAgIGxvZ2dlcjogdGhpcy5sb2dnZXIsXG4gICAgICBuYW1lOiB0aGlzLm9wdGlvbnMubmFtZSxcbiAgICAgIGJhc2VQYXRoOiB0aGlzLm9wdGlvbnMuYmFzZVBhdGhcbiAgICB9KTtcblxuICAgIC8vIFByZXBhcmUgY29uZmlndXJhdGlvbiBjb252aWN0XG4gICAgdGhpcy5jb252aWN0ID0gY29udmljdDxhbnk+KHtcbiAgICAgIGVudjoge1xuICAgICAgICBkb2M6ICcnLFxuICAgICAgICBmb3JtYXQ6IFsncHJvZHVjdGlvbicsICdkZXZlbG9wbWVudCcsICduaWdodGx5JywgJ3Rlc3RuZXQnXSxcbiAgICAgICAgZGVmYXVsdDogJ2RldmVsb3BtZW50JyxcbiAgICAgICAgZW52OiAnTk9ERV9FTlYnXG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0PFR5cGUgPSBhbnk+KGtleTogc3RyaW5nKTogVHlwZSB7XG4gICAgcmV0dXJuIHRoaXMuY29udmljdC5nZXQoa2V5KTtcbiAgfVxuXG4gIHB1YmxpYyBzZXQ8VHlwZSA9IGFueT4oa2V5OiBzdHJpbmcsIGRhdGE6IFR5cGUpOiB2b2lkIHtcbiAgICB0aGlzLmNvbnZpY3Quc2V0KGtleSwgZGF0YSBhcyBhbnkpO1xuICB9XG5cbiAgcHVibGljIGxvYWRTeW5jKCk6IHZvaWQge1xuICAgIHRoaXMuY29udmljdC5sb2FkKHRoaXMuc3RvcmFnZS5sb2FkU3luYygpKTtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBkdW1wKG92ZXJyaWRlTmFtZT86IHN0cmluZywgb3ZlcnJpZGVQYXRoPzogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgYXdhaXQgdGhpcy5zdG9yYWdlLmR1bXAodGhpcy5zdG9yYWdlLmxvYWRTeW5jKCksIG92ZXJyaWRlTmFtZSwgb3ZlcnJpZGVQYXRoKTtcbiAgfVxufVxuIl19