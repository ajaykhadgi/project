import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Button from "../Components/Button";
import { Link } from 'react-router-dom';

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});
 const recover = () => (
  <div>
    <h1>Recover your Password</h1>
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={values => {
        // same shape as initial values
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <Field name="firstName" placeholder="Firstname"/>
          {errors.firstName && touched.firstName ? (
            <div>{errors.firstName}</div>
          ) : null}<br/>
          <Field name="lastName" placeholder="LastName" />
          {errors.lastName && touched.lastName ? (
            <div>{errors.lastName}</div>
          ) : null}<br/>
          <Field name="email"placeholder="Email@gmail.com" type="email" />
          {errors.email && touched.email ? <div>{errors.email}</div> : null}
          <br/>
          <button type="submit">Submit</button>
          <br/>
          <Link to="/">Sign in</Link>
        </Form>
      )}
    </Formik>
  </div>
);
export default recover;