import React, { useState } from "react";
import Second from "./Second";
function First(){
    const [var_one,setVarOne] = useState("ReactJS");
    const [var_two,setVarTwo] = useState(100);
    const [var_three,setVarThree] = useState(true);
    const [var_four,setVarFour] = useState([10,20,30,40,50]);
    const [var_five,setVarFive] = useState([{"name":"niki",
                                             "price":100,
                                             "qty":10,
                                             "rating":5,
                                             "image":"https://ecommerce-9am.s3.ap-south-1.amazonaws.com/p1.jpg"},
                                            {
                                                "name":"polo",
                                             "price":200,
                                             "qty":20,
                                             "rating":10,
                                             "image":"https://ecommerce-9am.s3.ap-south-1.amazonaws.com/p2.jpg"
                                            },
                                            {
                                                "name":"american",
                                             "price":300,
                                             "qty":39,
                                             "rating":7.5,
                                             "image":"https://ecommerce-9am.s3.ap-south-1.amazonaws.com/p3.jpg"
                                            },
                                            {
                                                "name":"niki",
                                             "price":400,
                                             "qty":50,
                                             "rating":10,
                                             "image":"https://ecommerce-9am.s3.ap-south-1.amazonaws.com/p4.jpg"
                                            },
                                            {
                                                "name":"american",
                                             "price":500,
                                             "qty":25,
                                             "rating":4,
                                             "image":"https://ecommerce-9am.s3.ap-south-1.amazonaws.com/p5.jpg"
                                            }]);
        return(
             <React.Fragment>
                 <Second key1={var_one}
                         key2={var_two}
                         key3={var_three}
                         key4={var_four}
                         key5={var_five}></Second>
             </React.Fragment>
        )

};
export default First;