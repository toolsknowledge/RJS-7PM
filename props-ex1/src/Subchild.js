import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";

const useStyles = makeStyles({
    "table":{
        minWidth:250
    }
});


function Subchild(props){
    const classes = useStyles();
    return(
        <React.Fragment>
            <TableContainer component={Paper}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell>SNO</TableCell>
                            <TableCell>E_ID</TableCell>
                            <TableCell>E_NAME</TableCell>
                            <TableCell>E_SAL</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                         {props.key1.map((element,index)=>(
                             <TableRow key={index}>
                                 <TableCell>{index+1}</TableCell>
                                 <TableCell>{element.e_id}</TableCell>
                                 <TableCell>{element.e_name}</TableCell>
                                 <TableCell>{element.e_sal}</TableCell>
                             </TableRow>
                         ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </React.Fragment>
    )
}
export default Subchild;