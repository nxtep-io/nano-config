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
            const raw = [];
            for (const key in data) {
                raw.push(`${key}=${data[key]}`);
            }
            return this.write(raw.join('\n'), overrideName, overridePath);
        });
    }
}
exports.EnvConfigStorage = EnvConfigStorage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW52Q29uZmlnU3RvcmFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9zdG9yYWdlL0VudkNvbmZpZ1N0b3JhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDZCQUE2QjtBQUM3QiwrQkFBK0I7QUFDL0IsaUNBQWlDO0FBRWpDLDJEQUF3RDtBQUV4RCxNQUFhLGdCQUFpQixTQUFRLHFDQUFpQjtJQUF2RDs7UUFDRSxTQUFJLEdBQUcsS0FBSyxDQUFDO1FBQ2IsY0FBUyxHQUFHLEtBQUssQ0FBQztJQThCcEIsQ0FBQztJQTVCUSxRQUFRO1FBQ2IsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxNQUFNLENBQUMsQ0FBQztRQUU3RSxJQUFJLEVBQUUsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDMUIsMkNBQTJDO1lBQzNDLE1BQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1lBRTdELElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLGdEQUFnRCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksT0FBTyxFQUFFO2dCQUMxRixRQUFRLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRO2dCQUMvQixNQUFNLEVBQUUsTUFBTSxDQUFDLE1BQU07YUFDdEIsQ0FBQyxDQUFDO1lBRUgseUJBQVksTUFBTSxDQUFDLE1BQU0sRUFBRztTQUM3QjtRQUVELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLHlDQUF5QyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksT0FBTyxDQUFDLENBQUM7UUFDcEYsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDO0lBRVksSUFBSSxDQUFDLElBQW9CLEVBQUUsWUFBcUIsRUFBRSxZQUFxQjs7WUFDbEYsTUFBTSxHQUFHLEdBQWEsRUFBRSxDQUFDO1lBRXpCLEtBQUssTUFBTSxHQUFHLElBQUksSUFBSSxFQUFFO2dCQUN0QixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDakM7WUFFRCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxZQUFZLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFDaEUsQ0FBQztLQUFBO0NBQ0Y7QUFoQ0QsNENBZ0NDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCAqIGFzIGZzIGZyb20gJ2ZzLWV4dHJhJztcbmltcG9ydCAqIGFzIGRvdGVudiBmcm9tICdkb3RlbnYnO1xuaW1wb3J0IHsgQmFzZUNvbmZpZ0RhdGEgfSBmcm9tIFwiLi4vQmFzZUNvbmZpZ1wiO1xuaW1wb3J0IHsgQmFzZUNvbmZpZ1N0b3JhZ2UgfSBmcm9tIFwiLi9CYXNlQ29uZmlnU3RvcmFnZVwiO1xuXG5leHBvcnQgY2xhc3MgRW52Q29uZmlnU3RvcmFnZSBleHRlbmRzIEJhc2VDb25maWdTdG9yYWdlIHtcbiAgdHlwZSA9ICdFTlYnO1xuICBleHRlbnNpb24gPSAnZW52JztcblxuICBwdWJsaWMgbG9hZFN5bmMoKTogQmFzZUNvbmZpZ0RhdGEge1xuICAgIGNvbnN0IGVudlBhdGggPSBwYXRoLmpvaW4odGhpcy5vcHRpb25zLmJhc2VQYXRoLCBgJHt0aGlzLm9wdGlvbnMubmFtZX0uZW52YCk7XG5cbiAgICBpZiAoZnMuZXhpc3RzU3luYyhlbnZQYXRoKSkge1xuICAgICAgLy8gVE9ETzogUGFzcyBkZWJ1ZyBhcyBjb25zdHJ1Y3RvciBhcmd1bWVudFxuICAgICAgY29uc3QgcmVzdWx0ID0gZG90ZW52LmNvbmZpZyh7IHBhdGg6IGVudlBhdGgsIGRlYnVnOiB0cnVlIH0pO1xuICAgICAgXG4gICAgICB0aGlzLmxvZ2dlci5kZWJ1ZyhgRW52aXJvbm1lbnQgY29uZmlnIGxvYWRlZCBzdWNjZXNzZnVsbHkgZnJvbSBcIiR7dGhpcy5vcHRpb25zLm5hbWV9LmVudlwiYCwge1xuICAgICAgICBiYXNlUGF0aDogdGhpcy5vcHRpb25zLmJhc2VQYXRoLFxuICAgICAgICByZXN1bHQ6IHJlc3VsdC5wYXJzZWQsXG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIHsgLi4ucmVzdWx0LnBhcnNlZCB9O1xuICAgIH1cblxuICAgIHRoaXMubG9nZ2VyLndhcm4oYENvdWxkIG5vdCBsb2NhdGUgZW52aXJvbm1lbnQgZmlsZSBhdCBcIiR7dGhpcy5vcHRpb25zLm5hbWV9LmVudlwiYCk7XG4gICAgcmV0dXJuIHt9O1xuICB9XG5cbiAgcHVibGljIGFzeW5jIGR1bXAoZGF0YTogQmFzZUNvbmZpZ0RhdGEsIG92ZXJyaWRlTmFtZT86IHN0cmluZywgb3ZlcnJpZGVQYXRoPzogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgcmF3OiBzdHJpbmdbXSA9IFtdO1xuXG4gICAgZm9yIChjb25zdCBrZXkgaW4gZGF0YSkge1xuICAgICAgcmF3LnB1c2goYCR7a2V5fT0ke2RhdGFba2V5XX1gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy53cml0ZShyYXcuam9pbignXFxuJyksIG92ZXJyaWRlTmFtZSwgb3ZlcnJpZGVQYXRoKTtcbiAgfVxufSJdfQ==