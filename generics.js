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
var obj1 = {
    fun_one: function (arg1, arg2) {
        return arg1 + "..." + arg2;
    }
};
console.log(obj1.fun_one("Hello_1", "Hello_2"));
