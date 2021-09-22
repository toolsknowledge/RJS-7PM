import React from "react";
import { Formik,Form } from "formik";
import * as Yup from "yup";
import TextField from "./TextField";

const Signup = ()=>{

    const validate = Yup.object({
        firstName : Yup.string().
                    max(15,"can't exceed 15 characters").
                    required("Required")
    });


    return(
        <React.Fragment>
            <Formik initialValues={{firstName:""}} 
                    validationSchema={validate}
                    onSubmit={values=>{
                        console.log(values);
                    }}>
                <Form>
                    <h1>Signup</h1>
                    <TextField label="firstName"
                               name="firstName"
                               type="text"
                               placeholder="enter first name"></TextField>
                </Form>
            </Formik>
        </React.Fragment>
    )
};

export default Signup;