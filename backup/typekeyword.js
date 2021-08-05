var var_one = "Hello";
console.log(var_one); //Hello
//var_one = 100;                      //Type 'number' is not assignable to type 'string'.
function fun_one(arg1) {
    console.log(arg1);
}
fun_one("Hello_1"); //Hello_1
fun_one(100); //100
function fun_two(arg1) {
    console.log(arg1);
}
;
fun_two("Hello_2");
fun_two(1000);
function my_fun(arg1) {
    console.log(arg1);
}
;
my_fun("Angular12");
my_fun("VueJS");
//my_fun(100);            //Argument of type '100' is not assignable to parameter of type 'subjects'.
