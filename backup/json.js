//json
//java script object notation
//used to transfer the data over the "network"
//json is light weight
//objects ==> {}            arrays ==> []       data ==> key & value pairs
//key & value separated by using ":"
//key & value pairs separated by using ","

/*
    let obj = {
        "sub_one" : "ReactJS",
        "sub_two" : "NodeJS",
        "sub_three" : "MongoDB"
    };
    console.log( obj.sub_one, obj.sub_two, obj.sub_three );         //ReactJS NodeJS MongoDB
*/


/*
    let obj1 = {
                    "obj2":{
                        "sub_one" : ["ReactJS"]
                    },

                    "obj3":{
                        "sub_one" : ["NodeJS"]
                    },

                    "obj4":{
                        "sub_one" : ["MongoDB"]
                    }
    };
    console.log( obj1.obj2.sub_one[0],
                obj1.obj3.sub_one[0],
                obj1.obj4.sub_one[0] );            //ReactJS NodeJS MongoDB
*/


/*
    let obj = {
        "key1" : "Hello_1",
        "key2" : "Hello_2",
        "key3" : "Hello_3"
    }
    for(let key in obj){
    console.log( obj[key] ); 
    }
*/



let arr = [
    {"e_id":111,"e_name":"e_one","e_sal":10000},
    {"e_id":222,"e_name":"e_two","e_sal":20000},
    {"e_id":333,"e_name":"e_three","e_sal":30000},
    {"e_id":444,"e_name":"e_four","e_sal":40000},
    {"e_id":555,"e_name":"e_five","e_sal":50000}
];
//forEach()
//ES6
arr.forEach((element,index)=>{
    console.log( element.e_id, element.e_name, element.e_sal, index);
});
















































