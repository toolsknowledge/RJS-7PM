/*
    function fun_one<A,B>(arg1:A,arg2:B):void{
        console.log( arg1, arg2 );
    };
    fun_one<string,string>("Hello_1","Hello_2");                    //Hello_1 Hello_2
    fun_one<number,number>(100,200);                                //100 200
    fun_one<boolean,boolean>(true,false);                           //true false
    fun_one<string,number>("Welcome",100);                          //Welcome 100
    fun_one<any,any>({"key":"Hello"},["Hello"]);                    //{ key: 'Hello' } [ 'Hello' ]
*/


/*
    class class_one<A,B,C>{
        arg1:A;
        arg2:B;
        arg3:C
        constructor(param1:A,param2:B,param3:C){
            this.arg1 = param1;
            this.arg2 = param2;
            this.arg3 = param3;
        }
        public fun_one():A{
            return this.arg1;
        }
        public fun_two():B{
            return this.arg2;
        }
        public fun_three():C{
            return this.arg3;
        }
    }
    let obj:class_one<string,string,string> = new class_one("Hello_1","Hello_2","Hello_3");
    console.log(
        obj.fun_one(),
        obj.fun_two(),
        obj.fun_three()
    );
    let obj1:class_one<any,any,any> = new class_one({"key1":"Hello_1"},{"key1":"Hello_2"},{"key1":"Hello_3"});
    console.log(
        obj1.fun_one().key1,
        obj1.fun_two().key1,
        obj1.fun_three().key1
    );
*/


/*
    interface interface1<X,Y>{
        arg1:X;
        arg2:Y;
    }
    let obj:interface1<string,string> = {
        arg1 : "Hello_1",
        arg2 : "Hello_2"
    }
    console.log(
        obj.arg1,
        obj.arg2
    );
    class class_one implements interface1<any,any>{
        arg1 = { "key1" : "Hello_1" };
        arg2 = { "key2" : "Hello_2" }
    }
    let obj1:class_one = new class_one();
    console.log( obj1.arg1.key1, obj1.arg2.key2 );
*/


interface interface1<A,B>{
    fun_one : (arg1:A,arg2:B)=>void;
}
let obj1:interface1<any,any> = {
    fun_one : (arg1:any,arg2:any)=>{
        return `${arg1}...${arg2}`;
    }
}
console.log( obj1.fun_one("Hello_1","Hello_2") );





















