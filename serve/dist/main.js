"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const cors = require("cors");
const history = require("connect-history-api-fallback");
const express_rate_limit_1 = require("express-rate-limit");
const compression = require("compression");
const path_1 = require("path");
const helmet_1 = require("helmet");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use((0, express_rate_limit_1.default)({
        windowMs: 15 * 60 * 1000,
        max: 1000,
    }));
    app.use((0, helmet_1.default)({
        crossOriginOpenerPolicy: { policy: 'same-origin-allow-popups' },
        crossOriginResourcePolicy: false,
    }));
    app.use(history());
    app.use(cors({
        origin: ['http://localhost:3000', 'http://118.195.140.233:3000'],
    }));
    app.use(compression());
    app.useStaticAssets((0, path_1.join)(__dirname, '../public'), {
        maxAge: '1h',
        etag: true,
    });
    await app.listen(3002);
}
bootstrap();
//# sourceMappingURL=main.js.map