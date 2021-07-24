/// <reference path="demo1.ts" />
/// <reference path="demo2.ts" />
/// <reference path="demo3.ts" />
/// <reference path="demo4.ts" />
/// <reference path="demo5.ts" />
console.log(
    Demo1.var_one
);
console.log(
    Demo2.fun_one()
);
console.log(
    Demo3.obj.key1
);
console.log(
    new Demo4.class_one().my_var
);
let obj:Demo5.interface1={
    demo_var : "Hello"
};
console.log(
    obj.demo_var
);



