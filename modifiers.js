//1) public
//2) private
//3) protected
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
//public
//public members we can access "anywhere" in application
//public members we can access by using class "object"
//public modifier applicable to variables, constructors and functions also
//public members by default available to child classes
/*
    class class_one{
        public var_one:string;
        public var_two:string;
        public var_three:string;
        public constructor(){
            this.var_one = "Hello_1";
            this.var_two = "Hello_2";
            this.var_three = "Hello_3";
        }
        public getFunOne():string{
            return this.var_one;
        }
        public getFunTwo():string{
            return this.var_two;
        }
        public getFunThree():string{
            return this.var_three;
        }
    }
    let obj:class_one = new class_one();
    console.log( obj.var_one,
                obj.var_two,
                obj.var_three,
                obj.getFunOne(),
                obj.getFunTwo(),
                obj.getFunThree() );
*/
var class_one = /** @class */ (function () {
    function class_one() {
        this.var_one = "Hello_1";
    }
    return class_one;
}());
var class_two = /** @class */ (function (_super) {
    __extends(class_two, _super);
    function class_two() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return class_two;
}(class_one));
var obj = new class_two();
console.log(obj.var_one);
