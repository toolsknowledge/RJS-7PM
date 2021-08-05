import { wish,sub_one,sub_two,sub_three } from "./module1";
console.log( wish );
console.log( sub_one, sub_two, sub_three );

import fun_one from "./module1";
fun_one();              //welcome to fun_one !!!

import { obj } from "./module1";
for(let key in obj){
    console.log( obj[key] );
}

import { class_one } from "./module1";
let obj1:class_one = new class_one("ReactJS","NodeJS","MongoDB");
console.log( obj1.arg1, obj1.arg2, obj1.arg3 );


import { interface1 } from "./module1";
let obj2:interface1 = {
   fun_one : ():string=>{ return "Hello_1" },
   fun_two : ():string=>{ return "Hello_2" },
   fun_three : ():string=>{ return "Hello_3" }
}
console.log(
    obj2.fun_one(),
    obj2.fun_two(),
    obj2.fun_three()
);

class my_class implements interface1{
    fun_one():string{
        return "Hello_1";
    }
    fun_two():string{
        return "Hello_2";
    }
    fun_three():string{
        return "Hello_3";
    }
}
let obj3:my_class = new my_class();
console.log( obj3.fun_one(),
             obj3.fun_two(),
             obj3.fun_three() );









