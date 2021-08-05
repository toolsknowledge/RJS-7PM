"use strict";
exports.__esModule = true;
var module1_1 = require("./module1");
console.log(module1_1.wish);
console.log(module1_1.sub_one, module1_1.sub_two, module1_1.sub_three);
var module1_2 = require("./module1");
module1_2["default"](); //welcome to fun_one !!!
var module1_3 = require("./module1");
for (var key in module1_3.obj) {
    console.log(module1_3.obj[key]);
}
var module1_4 = require("./module1");
var obj1 = new module1_4.class_one("ReactJS", "NodeJS", "MongoDB");
console.log(obj1.arg1, obj1.arg2, obj1.arg3);
var obj2 = {
    fun_one: function () { return "Hello_1"; },
    fun_two: function () { return "Hello_2"; },
    fun_three: function () { return "Hello_3"; }
};
console.log(obj2.fun_one(), obj2.fun_two(), obj2.fun_three());
var my_class = /** @class */ (function () {
    function my_class() {
    }
    my_class.prototype.fun_one = function () {
        return "Hello_1";
    };
    my_class.prototype.fun_two = function () {
        return "Hello_2";
    };
    my_class.prototype.fun_three = function () {
        return "Hello_3";
    };
    return my_class;
}());
var obj3 = new my_class();
console.log(obj3.fun_one(), obj3.fun_two(), obj3.fun_three());
