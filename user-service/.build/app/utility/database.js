"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DBClient = void 0;
const mysql2_1 = __importDefault(require("mysql2"));
exports.DBClient = mysql2_1.default.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'example123',
    database: 'serverless'
});
//# sourceMappingURL=database.js.map