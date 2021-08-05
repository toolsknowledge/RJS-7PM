var Demo1;
(function (Demo1) {
    Demo1.var_one = "Hello_1";
})(Demo1 || (Demo1 = {}));
var Demo2;
(function (Demo2) {
    function fun_one() {
        return "Hello_2";
    }
    Demo2.fun_one = fun_one;
})(Demo2 || (Demo2 = {}));
var Demo3;
(function (Demo3) {
    Demo3.obj = {
        "key1": "Hello_1"
    };
})(Demo3 || (Demo3 = {}));
var Demo4;
(function (Demo4) {
    class class_one {
        constructor() {
            this.my_var = "Hello_5";
        }
    }
    Demo4.class_one = class_one;
})(Demo4 || (Demo4 = {}));
/// <reference path="demo1.ts" />
/// <reference path="demo2.ts" />
/// <reference path="demo3.ts" />
/// <reference path="demo4.ts" />
/// <reference path="demo5.ts" />
console.log(Demo1.var_one);
console.log(Demo2.fun_one());
console.log(Demo3.obj.key1);
console.log(new Demo4.class_one().my_var);
let obj = {
    demo_var: "Hello"
};
console.log(obj.demo_var);
