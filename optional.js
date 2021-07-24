function my_fun(arg1, arg2, arg3) {
    console.log(arg1, arg2, arg3);
}
;
my_fun(); //undefined undefined undefined
my_fun("Hello_1"); //Hello_1 undefined undefined
my_fun("Hello_1", "Hello_2", "Hello_3"); //Hello_1 Hello_2 Hello_3
my_fun(undefined, "Hello_2"); //undefined Hello_2 undefined
my_fun(null, null, null); //
