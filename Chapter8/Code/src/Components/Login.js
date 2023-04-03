import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  FieldArray,
  FastField,
} from "formik";
import * as Yup from "yup";
import TextError from "./TextError";

const Login = () => {
  const navigate = useNavigate();
  const initialValues = {
    name: "",
    email: "",
    password: "",
    comments: "",
    address: "",
    social: {
      facebook: "",
      linkedin: "",
    },
    phoneNums: ["", ""],
    phNumbers: [""], // we started just by asking one phone number
  };

  const onSubmit = (values) => {
    alert(JSON.stringify(values));
    setTimeout(() => {
      navigate("/");
    }, 0);
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Please provide your name!"),
    email: Yup.string()
      // .email("Invalid email format!")
      .required("Please provide your email!"),
    password: Yup.string()
      .required("Please provide a valid password!")
      .min(8, "Password is too short - should be 8 chars minimum!")
      .matches(/[a-zA-Z]/, "Password can only contain Latin letters!"),
    address: Yup.string().required("Please provide your address!"),
  });

  //Field level validation
  const validateComments = (value) => {
    // automatically get the value of the field from validate prop
    let error;
    if (!value) {
      error = "Please provide comments!";
    }
    return error;
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      // validateOnChange={false} //validation will not run on change of field
      // validateOnBlur={false} // validation will not run on blur out of field
      // validateOnMount //will populate all errors for fields 
    >
      {(formik) => {
        // console.log(formik);
        return (
          <>
            <Form className="login-form">
              <h1>LOGIN</h1>
              <Field
                type="text"
                id="name"
                name="name"
                className="input-form"
                placeholder="Enter your name**"
              />
              {/* ErrorMessage component accepts a name prop and renders the error message for that field 
        if the field has been visited and if error msg exists for the field */}
              <ErrorMessage name="name" component={TextError}></ErrorMessage>

              <Field
                type="email"
                id="email"
                name="email"
                className="input-form"
                placeholder="Enter your email**"
              />
              <ErrorMessage name="email" component={TextError}></ErrorMessage>

              <Field
                type="password"
                id="password"
                name="password"
                className="input-form"
                placeholder="Enter your password**"
              />
              <ErrorMessage name="password" component={TextError}>
                {/* Another way is to use render props method to show error message */}
                {/* {(error) => {
            <div className="input-error">{error}</div>;
          }} */}
              </ErrorMessage>

              <Field
                as="textarea" //you can use component prop also, but it's depricated
                id="comments"
                name="comments"
                className="input-form"
                placeholder="Provide your comments..."
                cols="25"
                rows="5"
                validate={validateComments}
              />
              <ErrorMessage name="comments" component={TextError} />

              {/* FastField component is optimized version of Field component, used in large form(>30 fields) when field has large validation requirements */}
              {/* FastField will only re-render when there are changes to values.address, errors.address, touched.address */}
              {/* When you feel particular field is independent of all other fields then you can use FastField for that particular field */}
              <FastField id="address" name="address">
                {/* Rendering Props */}
                {(props) => {
                  const { field, form, meta } = props;
                  console.log("Address field render"); //change in form state causes all the field to re-render, so when we change Field to Fast Field then this address field will not re-render
                  return (
                    <div>
                      <input
                        type="text"
                        id="address"
                        className="input-form"
                        placeholder="Enter your address**"
                        {...field} // will provide all the attributes including name, and helper methods like onChange
                      ></input>
                      {meta.touched && meta.error ? (
                        <h3 className="input-error">{meta.error}</h3>
                      ) : null}
                    </div>
                  );
                }}
              </FastField>

              {/* Nested Objects */}
              <Field
                type="text"
                id="facebook"
                name="social.facebook"
                className="input-form"
                placeholder="Enter your facebook url"
              />
              <Field
                type="text"
                id="linkedin"
                name="social.linkedin"
                className="input-form"
                placeholder="Enter your linkedin url"
              />

              <Field
                type="text"
                id="phoneNum1"
                name="phoneNums[0]"
                className="input-form"
                placeholder="Enter your primary phone number"
              />

              <Field
                type="text"
                id="phoneNum2"
                name="phoneNums[1]"
                className="input-form"
                placeholder="Enter your secondary phone number"
              />

              {/* FieldArray is used to deal with list of data or common array */}
              <FieldArray id="phNumbers" name="phNumbers">
                {(fieldArrayProps) => {
                  const { push, remove, form } = fieldArrayProps;
                  const { values } = form;
                  const { phNumbers } = values;
                  return (
                    <>
                      {phNumbers.map((phoneNumber, index) => {
                        return (
                          <div key={index}>
                            <span>
                              <Field
                                type="text"
                                name={`phNumbers[${index}]`}
                                className="input-form-phoneNumber"
                                placeholder="List of phone numbers"
                              />
                              {index > 0 && (
                                <button
                                  type="button"
                                  className="input-form-button"
                                  onClick={() => remove(index)}
                                >
                                  -
                                </button>
                              )}
                              <button
                                type="button"
                                className="input-form-button"
                                onClick={() => push("")}
                              >
                                +
                              </button>
                            </span>
                          </div>
                        );
                      })}
                    </>
                  );
                }}
              </FieldArray>
               {/* isValid is true when errors object is empty, so when errors are there then isValid is false and button will be disabled */}
              {/* <button type="submit" disabled={!formik.isValid}>Submit</button> */}
              <button type="submit" disabled={formik.isSubmitting}>Submit</button>
            </Form>
          </>
        );
      }}
    </Formik>
  );
};

export default Login;
