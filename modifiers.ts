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
//=======
// => variables, functions and constructor also
// => private members won't accessable to child classes
// => private members we can't access by using "class" objects
// => we can't create object to the the private constructor class












































