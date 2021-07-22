//class
//collection of "variables" and "functions" called as class
//recomended modifier for variables is "private"
//recomended modifier for functions is "public"
//we will refer current class members by using "this" keyword
//we will create object to the class by using "new" keyword
//we will define constructor by using "constructor" keyword
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*
    class class_one{
        private sub_one:string;
        private sub_two:string;
        private sub_three:string;
        constructor(){
            this.sub_one = "ReactJS";
            this.sub_two = "NodeJS";
            this.sub_three = "MongoDB";
        }
        public getSubOne():string{
            return this.sub_one;
        }
        public getSubTwo():string{
            return this.sub_two;
        }
        public getSubThree():string{
            return this.sub_three;
        }
    }
    let obj1:class_one = new class_one();
    console.log( obj1.getSubOne(), obj1.getSubTwo(), obj1.getSubThree() );
*/
/*
    class class_one{
        constructor(public arg1:string,public arg2:string,public arg3:string){}
    }
    let obj1:class_one = new class_one("ReactJS","NodeJS","MongoDB");
    console.log( obj1.arg1, obj1.arg2, obj1.arg3 );             //ReactJS NodeJS MongoDB

    let obj2:class_one = new class_one("Angular12","Deno","CassandraDB");
    console.log( obj2.arg1, obj2.arg2, obj2.arg3 );             //Angular12 Deno CassandraDB
*/
/*
class class_one{
    constructor(public arg1:any){}
}

class class_two{
    public getWish():string{
        return "Hello";
    }
};

let obj1:class_one = new class_one( new class_two() );
console.log( obj1.arg1.getWish() );
*/
var class_one = /** @class */ (function () {
    function class_one() {
    }
    class_one.prototype.fun_one = function () {
        return { "msg": "i am from parent class" };
    };
    return class_one;
}());
;
var class_two = /** @class */ (function (_super) {
    __extends(class_two, _super);
    function class_two() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    class_two.prototype.fun_two = function () {
        return { "msg": "i am from child class" };
    };
    return class_two;
}(class_one));
;
var obj1 = new class_one();
console.log(obj1.fun_one());
var obj2 = new class_two();
console.log(obj2.fun_one(), obj2.fun_two());
