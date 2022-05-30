import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { createPost } from "./api";

const CreatePost = () => {
  console.log("inside the create post");
  const navigate = useNavigate();
  const location = useLocation();
  const [userId, setUserId] = useState();

  useEffect(() => {
    setUserId(location.state.userId);
  });
  return (
    <Formik
      initialValues={{
        title: "",
        body: "",
      }}
      validationSchema={Yup.object({
        title: Yup.string().required("Title is required"),
        body: Yup.string().required("Please provide something"),
      })}
      onSubmit={(values) => {
        console.log("Inside submitting posts");
        const { title, body } = values;
        console.log(`title:${title},body:${body}`);
        //alert(JSON.stringify(values, null, 2));
        createPost(userId, title, body)
          .then((response) => {
            console.log(`respone:${JSON.stringify(response)}`);
            navigate(-1);
          })
          .catch((error) => {
            alert(error);
          });
      }}
    >
      <Form>
        <h1>Create New Post</h1>
        <div>
          <label htmlFor="title">Title:</label>
          <Field type="text" name="title" />
          <ErrorMessage name="title" />
        </div>
        <div>
          <label htmlFor="body">Post:</label>
          <Field type="text" name="body" />
          <ErrorMessage name="body" />
        </div>
        <input type="submit" value="Submit" />
      </Form>
    </Formik>
  );
};
export default CreatePost;
