import React from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

const Login = () => {
  const navigate = useNavigate();
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };
  const onSubmit = (values) => {
    alert(JSON.stringify(values));
    setTimeout(() => {
      navigate("/");
    }, 0);
  };
  const validate = (values) => {
    let errors = {};
    if (!values.name) {
      errors.name = "Required";
    }
    if (!values.email) {
      errors.email = "Required";
    }
    if (!values.password) {
      errors.password = "Required";
    }
    return errors;
  };
  const validationSchema = Yup.object({
    name: Yup.string().required("Please provide your name!"),
    email: Yup.string()
    .email("Invalid email format!")
    .required("Please provide your email!"),
    password: Yup.string()
    .required("Please provide a valid password!")
    .min(8, 'Password is too short - should be 8 chars minimum!')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters!')
  })
  const formik = useFormik({
    // the properties inside initialValues corresponds to the name attribute of input tag
    initialValues,
    //another property is onSubmit method which automatically recieves form state as it's argument
    // when you click on submit method, formik is going to execute this onSubmit method
    onSubmit,
    // validate is method which automatically recieves values object as it's argument
    //validate,
    validationSchema,
  });
  console.log(formik.errors);
  return (
    <div>
      <form className="login-form" onSubmit={formik.handleSubmit}>
        <h1>LOGIN</h1>
        <input
          type="text"
          id="name"
          name="name"
          className="input-form"
          placeholder="Enter your name"
          // onChange={formik.handleChange} //formik gives us a helper method handleChange that reads the value of input and updates the values
          // onBlur={formik.handleBlur} // formik gives handleBlur helper method that helps to check which fields are visited
          // value={formik.values.name}
          // onChange, onBlur and values are repeated in each input tag, we can refactor these line by giving below helper method by passing name attribute as a argument
          {...formik.getFieldProps('name')}
        />
        <div className="input-error">
          {formik.touched.name && formik.errors.name ? (
            <h3>{formik.errors.name}</h3>
          ) : null}
        </div>

        <input
          type="email"
          id="email"
          name="email"
          className="input-form"
          placeholder="Enter your email"
          // onChange={formik.handleChange}
          // onBlur={formik.handleBlur}
          // value={formik.values.email}
          {...formik.getFieldProps('email')}
        />
        <div className="input-error">
          {formik.touched.email && formik.errors.email ? (
            <h3>{formik.errors.email}</h3>
          ) : null}
        </div>
        <input
          type="password"
          id="password"
          name="password"
          className="input-form"
          placeholder="Enter your password"
          // onChange={formik.handleChange}
          // onBlur={formik.handleBlur}
          // value={formik.values.password}
          {...formik.getFieldProps('password')}
        />
        <div className="input-error">
          {formik.touched.password && formik.errors.password ? (
            <h3>{formik.errors.password}</h3>
          ) : null}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
