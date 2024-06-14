"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DBO = void 0;
const database_1 = require("../utility/database");
class DBO {
    executeQuery(query, value) {
        return new Promise((resolve, reject) => {
            const result = database_1.DBClient.execute(query, value, (err, result) => {
                if (err)
                    reject(err);
                resolve(result);
            });
        });
    }
}
exports.DBO = DBO;
//# sourceMappingURL=DboHelper.js.map