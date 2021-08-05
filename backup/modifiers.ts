//1) public
//2) private
//3) protected

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



/*
    class class_one{
        public var_one:string = "Hello_1";
    }
    class class_two extends class_one{}
    let obj:class_two = new class_two();
    console.log( obj.var_one );             //Hello_1
*/


//private
//variables, functions constructor
//we can't create object to the private class constructor
//private members won't accessable to child classes
//private members we can't access by using class objects

/*
    class class_one{
        private constructor(){}
    };
    let obj:class_one = new class_one();
    //Constructor of class 'class_one' is private and only accessible within the class declaration.
*/


/*
    class class_one{
        private var_one:string = "Hello";
    }
    let obj:class_one = new class_one();
    //obj.var_one;            //Property 'var_one' is private and only accessible within class 'class_one'.
*/

/*
    class class_one{
        private var_one:any = "Hello";
    }
    class class_two extends class_one{}
    let obj:class_two = new class_two();
    obj.var_one;
    //Property 'var_one' is private and only accessible within class 'class_one'.
*/


/*
    class class_one{
        private var_one:string = "Hello";
        public var_two:string = this.var_one;
    }
    let obj:class_one = new class_one();
    console.log( obj.var_two );                     //Hello
*/


//protected
//all protected members available to "child" classes
//we "can't" access protected members by using class objects
//protected modifier applicable to "variables, functions and constructor" also

/*
    class class_one{
        protected var_one:string = "Hello";
    }
    new class_one().var_one;
*/


/*
    class class_one{
        protected constructor(){}
    }
    new class_one();
*/


/*
    class class_one{
    protected var_one:string = "Hello";  
    }
    class class_two extends class_one{}

    let obj:class_two = new class_two();
    obj.var_one;                //Property 'var_one' is protected and only accessible within class 'class_one' and its subclasses.
*/

/*
    class class_one{
        protected var_one:string;
        constructor(){
            this.var_one = "Hello";
        }
        protected fun_one():string{
            return this.var_one;
        }
    }
    class class_two extends class_one{
        public my_fun():string{
            return this.fun_one();
        }
    }
    let obj:class_two = new class_two();
    console.log( obj.my_fun() );
*/



/*
    //readonly
    class class_one{
        readonly var_one:any;
        constructor(){
            this.var_one = "Hello";
        }
    };
    let obj:class_one = new class_one();
    console.log( obj.var_one );
    obj.var_one = "welcome";                //Cannot assign to 'var_one' because it is a read-only property.
*/



//this
//super
//readonly
//static
//type


//static
//we can access static members by using "class names" directly
//we "can't" access static members by using class objects
//we "can't" initilize static members by using "constructors"

/*
    class class_one{
        static var_one:string;
        constructor(){
            this.var_one = "Hello";
        }
    }
    //Property 'var_one' does not exist on type 'class_one'. Did you mean to access the static member 'class_one.var_one' instead?
*/



/*
    class class_one{
        static var_one:any = "Hello";
    }
    let obj:class_one = new class_one();
    obj.var_one;            //Property 'var_one' does not exist on type 'class_one'. Did you mean to access the static member 'class_one.var_one' instead?
*/


/*
    class class_one{
        static var_one:any = "Hello";
    }
    console.log( class_one.var_one );               //Hello
*/

class class_one{
    private constructor(){}
    public fun_one():string{
        return "Hello_1";
    }
    static fun_two():any{
        return new class_one();
    }
}
console.log( class_one.fun_two().fun_one() );







































































































































































