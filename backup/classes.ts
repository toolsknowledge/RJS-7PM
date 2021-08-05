//class
//collection of "variables" and "functions" called as class
//recomended modifier for variables is "private"
//recomended modifier for functions is "public"
//we will refer current class members by using "this" keyword
//we will create object to the class by using "new" keyword
//we will define constructor by using "constructor" keyword

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

/*
class class_one{
    public fun_one():any{
        return {"msg":"i am from parent class"};
    }
};
class class_two extends class_one{
    public fun_two():any{
        return {"msg":"i am from child class"};
    }
};
let obj1:class_one = new class_one();
console.log( obj1.fun_one() );
let obj2:class_two = new class_two();
console.log( obj2.fun_one(), obj2.fun_two() );
*/


/*
    class class_one{
        public var_one:any;
        constructor(public arg1:any){
            this.var_one = arg1;
        }
    };
    class class_two extends class_one{
        public var_two:any;
        constructor(public param1:any,public param2:any){
            super(param1);
            this.var_two = param2;
        }
    }
    class class_three extends class_two{
        public var_three:any;
        constructor(public param1:any,
                    public param2:any,
                    public param3:any){
            super(param1,param2);
            this.var_three = param3;
        }
    }
    let obj1:class_three = new class_three("Hello_1","Hello_2","Hello_3");
    console.log(
        obj1.var_one,
        obj1.var_two,
        obj1.var_three
    );


    let obj2:class_two = new class_two("Hello_1","Hello_2");
    console.log( obj2.var_one, obj2.var_two );


    let obj3:class_one = new class_one("Hello_1");
    console.log( obj3.var_one );
*/


//interfaces
//we know only declarations, but we don't know implementations then we will choose interfaces
//we will declare intefaces by using "interface" keyword
//implementation provided by either classes or json

/*
interface interface1{
    var_one:any;
}
let obj1:interface1 = {
    var_one : "Hello_1"
}
let obj2:interface1 = {
    var_one : "Hello_2"
}
class class_one implements interface1{
    var_one:any = "Hello_3";
}
console.log(
    obj1.var_one
);
console.log(
    obj2.var_one
);
console.log(
    new class_one().var_one
)
*/


/*
interface interface1{
    fun_one:()=>any;
    fun_two:()=>any;
    fun_three:()=>any;
};
let obj1:interface1 = {
    fun_one : ():any=>{
        return "Hello_1";
    },
    fun_two : ():any=>{
        return "Hello_2";
    },
    fun_three : ():any=>{
        return "Hello_3";
    }
}
console.log( obj1.fun_one(),
             obj1.fun_two(),
             obj1.fun_three() );
//Hello_1 Hello_2 Hello_3
*/


/*
    interface interface1{
        var_one:any;
    }
    interface interface2 extends interface1{
        var_two:any;
    }
    interface interface3 extends interface2{
        var_three:any;
    }
    class my_class implements interface3{
        var_one:any = "ReactJS";
        var_two:any = "NodeJS";
        var_three:any = "MongoDB";
    }
    let obj:my_class = new my_class();
    console.log( obj.var_one,
                obj.var_two,
                obj.var_three );
*/


/*
    interface interface1{
        var_one:any;
    }
    interface interface2{
        var_two:any;
    }
    interface interface3 extends interface1,interface2{
        var_three:any;
    }
    let obj:interface3 = {
        var_one : "VueJS",
        var_two : "Deno",
        var_three : "CassandraDB"
    }
    console.log(
        obj.var_one,
        obj.var_two,
        obj.var_three
    );
*/


//abstract classes
//when ever we know the partial implementations, then we will choose abstract classes
//we will define abstract classes by using "abstract" keyword
//implementations provided by child classes
abstract class class_one{
    fun_one():any{
        return "Hello_1"
    }
    abstract fun_two():any;
};
class class_two extends class_one{
    fun_two():any{
        return "Hello_2";
    }
}
let obj:class_two = new class_two();
console.log( obj.fun_one(), obj.fun_two() );        //Hello_1 Hello_2



































































