import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import {postUSers } from "./api";

import { useNavigate } from "react-router-dom";
 
const  CreateNewUser = () => {
    const navigate = useNavigate();
  return (
    <Formik
      initialValues={{
        Name: "",
        email: "",
        gender: "",
        status: "",
        
      }}
      validationSchema={Yup.object({
        Name: Yup.string().required("Name is required"),
        email: Yup.string()
          .email("Must be valid email syntax")
          .required("email is required"),
        
       
      })}
      onSubmit={(values) => {
        
        console.log(
          `selectedname: inside submit ${values.Name}} `
        );
        const {Name,email,gender,status}=values;

         const response = postUSers(Name,email,gender,status);
         if (!response.error) {
         navigate("/", 
);
        } else {
          alert(
            "Error while creating new user: " + JSON.stringify(response.error.detail)
           );
         }
          
       
      }}
    >
        
        <Form>
        <label htmlFor="Name">Name</label>
        <Field name="Name" type="text" />
        <br />
        <ErrorMessage name="Name" />
        <br />

        <label htmlFor="email">Email</label>
        <Field name="email" type="text" />
        <br />
        <ErrorMessage name="email" />
        <br />

        <div role="group" aria-labelledby="my-radio-group">
          <label>
            <Field type="radio" name="gender" value="Male" />
            Male
          </label>
          <label>
            <Field type="radio" name="gender" value="Female" />
            Female
          </label>
        </div>

        <div role="group" aria-labelledby="my-radio-group">
          <label>
            <Field type="radio" name="status" value="active" />
            Active
          </label>
          <label>
            <Field type="radio" name="status" value="inactive" />
            Inactive
          </label>
        </div>

        <button type="submit" value="create newUSer"
    
         >post user</button>
      </Form>
    </Formik>
  );
};
 
export default CreateNewUser;