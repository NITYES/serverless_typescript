"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const DboHelper_1 = require("./DboHelper");
class UserRepository extends DboHelper_1.DBO {
    constructor() {
        super();
    }
    createUser({ email, password, phone, user_type, salt, }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const query = `INSERT into users (email,password,phone,user_type,salt)  Values(?,?,?,?,?);`;
                const value = [email, password, phone, user_type, salt];
                const result = yield this.executeQuery(query, value);
                console.log('results------>', result);
                if (result.rowCount > 0)
                    return true;
                return false;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    getUser(email) {
        return __awaiter(this, void 0, void 0, function* () {
            //
            // const client = DBClient();
            // const query = `SELECT email,phone,password,user_type,salt FROM users where email= $1;`;
            // const value = [email];
            // const result = await client.query(query, value);
            // await client.end();
            return {};
        });
    }
}
exports.UserRepository = UserRepository;
//# sourceMappingURL=userRepository.js.map