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
function asyncForEach() {
    ["cats", "dogs", "mosqitoes"].forEach((query) => __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`https://api.giphy.com/v1/gifs/translate?api_key=y4ULTrA90itnKSg8Vb6xA30HsIOyNdxf&s=${query}`, { mode: "cors" });
        const json = yield response.json();
        console.log(json);
    }));
}
function testPromises() {
    return __awaiter(this, void 0, void 0, function* () {
        if (true) {
            return yield 1;
        }
        else {
            return Promise.reject(5);
        }
    });
}
console.log(testPromises().catch((reason) => {
    console.log(reason);
}));
