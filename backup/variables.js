//9030001847

//json
//java script object notation
//json used to transfer the data over the network
//objects ==> { }
//arrays  ==> [ ]
//data    ==> key & value pairs
//key & value separated by using ":"
var obj = {
    "sub_one" : "ReactJS",
    "sub_two" : "NodeJS",
    "sub_three" : "MongoDB"
};
console.log( obj.sub_one, obj.sub_two, obj.sub_three );   //ReactJS NodeJS MongoDB




//array
//collection of indexed elements called as array
//[]
//for() forEach()  for...of(),..........
//index starts from "0"
var arr1 = ["Hello_1","Hello_2","Hello_3","Hello_4","Hello_5"];
//console.log( arr1[0], arr1[2], arr1[4], arr1[5] , arr1[-1] );           //Hello_1 Hello_3 Hello_5 undefined undefined
var arr2 = ["Welcome_1","Welcome_2","Welcome_3","Welcome_4","Welcome_5"];
arr1.forEach( function(element,index){
    console.log( element , arr2[index] );
} );






//boolean
//true  or false
//true means 1
//false means 0
var flag = true;
console.log( flag );                        //true
console.log( true == 1 );                   //true
console.log( true === 1 );                  //false
console.log( false == 0 );                  //true
console.log( false === 0 );                 //false
console.log( true+true );                   //2
console.log( 1+true+true+false);            //3
console.log( 1 + "true" );                  //1true







/*
//number
//1) decimal        2) double       3) hexadecimal      4) octal        5) binary
//hexadecimal number will prefix with "0x"
//octal number will prefix with "0o"
//binary number will prefix with "0b"
var decimalNum = 100;
var doubleNum = 100.12345;
var hexadecimalNum = 0x123ABC;
var octalNum = 0o123;
var binaryNum = 0b101010;
console.log( decimalNum, doubleNum, hexadecimalNum, octalNum, binaryNum );



var sub_one = "ReactJS";
var wish = `welcome to ${sub_one}`;
console.log( wish );                                //welcome to ReactJS

var sub_two = "NodeJS";
var sub_three = "MongoDB";
var mern = `${sub_one} <==> ${sub_two} <==> ${sub_three}`;
console.log( mern );                            //ReactJS <==> NodeJS <==> MongoDB

var msg = `
    ReactJS Means

    Components

    Hooks

    Redux    

    State Management

    MERN Stack
`;  
console.log(msg);



//var 123abc = "Hello";       //Error
var $123 = "Hello";
var _123 = "Welcome";
var $_abc123 = "ReactJS";
console.log( $123 );                //Hello
console.log( _123 );                //Welcome
console.log( $_abc123 );            //ReactJS
*/






