"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verification = exports.encryption = void 0;
const bcrypt_1 = require("bcrypt");
const encryption = function (pwd) {
    const salt = (0, bcrypt_1.genSaltSync)(10);
    const hash = (0, bcrypt_1.hashSync)(pwd, salt);
    return hash;
};
exports.encryption = encryption;
const verification = function (pwd, hash) {
    if (!pwd || !hash)
        return false;
    const isOk = (0, bcrypt_1.compareSync)(pwd, hash);
    return isOk;
};
exports.verification = verification;
//# sourceMappingURL=bcrypt.js.map