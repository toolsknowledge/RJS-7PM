import React from "react";

function Second(props){
    return(
        <React.Fragment>
            <h1>{props.key1}</h1>
            <h1>{props.key2}</h1>
            <h1>{JSON.stringify(props.key3)}</h1>
            {props.key4.map((element,index)=>(
                <h1>{element}</h1>
            ))}
            <table border="1"
                   cellPadding="10px"
                   cellSpacing="10px"
                   align="center">
                <tr>
                    <th>SNO</th>
                    <th>NAME</th>
                    <th>PRICE</th>
                    <th>QTY</th>
                    <th>RATING</th>
                    <th>IMAGE</th>
                </tr>
                {props.key5.map((element,index)=>(
                    <tr key={index}>
                        <td>{index+1}</td>
                        <td>{element.name}</td>
                        <td>{element.price}</td>
                        <td>{element.qty}</td>
                        <td>{element.rating}</td>
                        <td><img width="100px" 
                                 height="50px"
                                 src={element.image}></img></td>
                    </tr>
                ))}
            </table>
        </React.Fragment>
    )
};

export default Second;