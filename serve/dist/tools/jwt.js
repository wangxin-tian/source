"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = exports.generateToken = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const secret = 'MyBlog';
const expiresIn = 60 * 60 * 24 * 30;
const generateToken = function (_id) {
    const payload = { _id };
    const token = (0, jsonwebtoken_1.sign)(payload, secret, { expiresIn });
    return token;
};
exports.generateToken = generateToken;
const verifyToken = function (token) {
    try {
        const payload = (0, jsonwebtoken_1.verify)(token, secret);
        return payload;
    }
    catch (error) {
        return false;
    }
};
exports.verifyToken = verifyToken;
//# sourceMappingURL=jwt.js.map