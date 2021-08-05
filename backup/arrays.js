//array
//collection of indexed elements called as array
//index starts from "0"
//we will represent array "[]"

/*
    let arr = [1,2,3,4,5,6,7,8,9,10]; 
    console.log( arr[0], arr[4], arr[9], arr[10],arr[100] );            //1 5 10 undefined undefined
    let arr1 = [100,200,300,400,500];
    console.log(arr1.length);               //5
    arr1.length = 3;
    console.log( arr1[0],arr1[2],arr1[4] );     //100 300 undefined
*/

/*
    let arr = [10,20,30,40,50,60,70,80,90,100];
    console.log(arr.length);                        //10
    delete arr[0];
    console.log(arr);
    console.log( arr.length );                      //10
    delete arr[4];
    console.log( arr.length );                      //10
*/


/*
    let arr1 = [1,2,3,4,5];
    console.log(
        arr1.map((element,index)=>{
            return element*100;
        })
    );          //[ 100, 200, 300, 400, 500 ]

console.log(
    [1,2,3,4,5].map((element,index)=>{
        return "$"+element;
    })
);              //[ '$1', '$2', '$3', '$4', '$5' ]
*/


/*
console.log(
    [100,200,300,400,500].filter((element,index)=>{
        return element>=300;
    })
);          //[ 300, 400, 500 ]


console.log(
    [1,2,3,4,5].map((element,index)=>{
        return element*1000;
    }).filter((element,index)=>{
        return element<=2000;
    })
);          //[ 1000, 2000 ]
*/



/*
console.log(
    [1,2,3,4,5].reduce((firstValue,nextValue)=>{
        return firstValue+nextValue;
    }) 
);          //15

console.log(
    [1,2,3,4,5].map((jitendra,sonakar)=>{
        return jitendra*1000
    }).filter((sonakar,jitendra)=>{
        return sonakar<=5000;
    }).reduce((firstValue,nextValue)=>{
        return firstValue+nextValue;
    })
);      //15000
*/

/*
    let arr1 = [20,30,40];
    console.log( arr1 );                //[ 20, 30, 40 ]
    arr1.push(50);
    console.log( arr1 );                //[ 20, 30, 40, 50 ]
    arr1.unshift(10);
    console.log( arr1 );                //[ 10, 20, 30, 40, 50 ]
    arr1.pop();
    console.log(arr1);                  //[ 10, 20, 30, 40 ]
    arr1.shift();
    console.log(arr1);                  //[ 20, 30, 40 ]
*/


let arr1 = [10,20,30,40,50,60,70,80,90,100];
arr1.splice(4,3);
console.log(arr1);              //[10,20,30,40,80,90,100]
arr1.splice(4,1);
console.log(arr1);              //[ 10, 20, 30, 40, 90, 100 ]
arr1.splice(1,2);
console.log(arr1);              //[ 10, 40, 90, 100 ]
arr1.splice(1,0,20,30)
console.log(arr1);              //[ 10, 20, 30, 40, 90, 100 ]
arr1.splice(4,0,50,60,70,80);
console.log(arr1);              //[10,20,30,40,50,60,70,80,90,100]



















































