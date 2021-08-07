import React, { useState } from "react";

function State(){
    const [products,setProducts] = useState([
        {"p_id":111,"p_name":"p_one","p_cost":10000},
        {"p_id":222,"p_name":"p_two","p_cost":20000},
        {"p_id":333,"p_name":"p_three","p_cost":30000},
        {"p_id":444,"p_name":"p_four","p_cost":40000},
        {"p_id":555,"p_name":"p_five","p_cost":50000}
    ]);
    const [varone,setVarOne] = useState("ReactJS");
    const [vartwo,setVarTwo] = useState(100);
    const [varthree,setVarThree] = useState(true);
    const [varfour,setVarFour] = useState({"key1":"Hello_1","key2":"Hello_2","key3":"Hello_3"});
    const [varfive,setVarFive] = useState([10,20,30,40,50]);
    return(
        <React.Fragment>
            <table border="1"
                   cellPadding="10px"
                   cellSpacing="10px"
                   align="center">
                <tr>
                    <th>SNO</th>
                    <th>P_ID</th>
                    <th>P_NAME</th>
                    <th>P_COST</th>
                </tr>
                {products.map((element,index)=>(
                    <tr key={index}>
                        <td>{index+1}</td>
                        <td>{element.p_id}</td>
                        <td>{element.p_name}</td>
                        <td>{element.p_cost}</td>
                    </tr>
                ))}
            </table>
            <h1>{varone}</h1>
            <h2>{vartwo}</h2>
            <h3>{JSON.stringify(varthree)}</h3>
            <h1>{JSON.stringify(varfour)}</h1>
            {
                varfive.map((element,index)=>(
                    <h2 key={index}>{element}</h2>
                ))
            }
        </React.Fragment>
    )
};

export default State;