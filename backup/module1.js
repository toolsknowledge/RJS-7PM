"use strict";
exports.__esModule = true;
exports.class_one = exports.obj = exports.sub_three = exports.sub_two = exports.sub_one = exports.wish = void 0;
exports.wish = "welcome to modules";
exports.sub_one = "ReactJS";
exports.sub_two = "NodeJS";
exports.sub_three = "MongoDB";
function fun_one() {
    console.log("welcome to fun_one !!!");
}
exports["default"] = fun_one;
exports.obj = {
    "key1": "Hello_1",
    "key2": "Hello_2",
    "key3": "Hello_3"
};
var class_one = /** @class */ (function () {
    function class_one(arg1, arg2, arg3) {
        this.arg1 = arg1;
        this.arg2 = arg2;
        this.arg3 = arg3;
    }
    return class_one;
}());
exports.class_one = class_one;
