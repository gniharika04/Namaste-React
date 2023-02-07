import React, { useState } from "react";

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>
      {isLoggedIn ? (
        <button className="loginBtn" onClick={() => setIsLoggedIn(false)}>
          Login
        </button>
      ) : (
        <button className="loginBtn" onClick={() => setIsLoggedIn(true)}>
          Log out
        </button>
      )}
    </div>
  );
};
export default Login;
