import React from "react";
import { useRouteError, Link } from "react-router-dom";
import errorImg from "../assets/error.jpg";

const ErrorPage = () => {
  // call useRouteError so we can access error data while routing(returns error object)
  const error = useRouteError();
  return (
      <div className="error-container">
        <img src={errorImg}></img>
        <h4>{error.data}</h4>
        <Link to="/">
          <button className="back-btn">Back to home</button>
        </Link>
      </div>


  );
};
export default ErrorPage;
