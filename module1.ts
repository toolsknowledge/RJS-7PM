export let wish:string = "welcome to modules";
export let sub_one:string = "ReactJS";
export let sub_two:string = "NodeJS";
export let sub_three:string= "MongoDB";


export default function fun_one():void{
    console.log("welcome to fun_one !!!");
}

export let obj = {
    "key1" : "Hello_1",
    "key2" : "Hello_2",
    "key3" : "Hello_3"
};


export class class_one{
    constructor(public arg1:any,
                public arg2:any,
                public arg3:any){}
}


export interface interface1{
    fun_one : ()=>string;
    fun_two : ()=>string;
    fun_three : ()=>string;
}


