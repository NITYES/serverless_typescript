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
exports.verifyPassword = exports.hashedPassword = exports.getSalt = void 0;
const bcrypt_1 = require("bcrypt");
const getSalt = () => __awaiter(void 0, void 0, void 0, function* () {
    return (0, bcrypt_1.genSalt)();
});
exports.getSalt = getSalt;
const hashedPassword = (password, salt) => __awaiter(void 0, void 0, void 0, function* () {
    // const salt=await getSalt()
    return (0, bcrypt_1.hash)(password, salt);
});
exports.hashedPassword = hashedPassword;
const verifyPassword = (inputPassword, savedPassword, salt) => __awaiter(void 0, void 0, void 0, function* () {
    return (yield (0, exports.hashedPassword)(inputPassword, salt)) === savedPassword;
});
exports.verifyPassword = verifyPassword;
//# sourceMappingURL=password.js.map