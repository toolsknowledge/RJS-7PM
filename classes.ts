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
















































