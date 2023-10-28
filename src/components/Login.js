import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const toggleSignInForm = () => {
    setIsSignIn((state) => !state);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/dace47b4-a5cb-4368-80fe-c26f3e77d540/f5b52435-458f-498f-9d1d-ccd4f1af9913/IN-en-20231023-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="logo"
        />
      </div>
      <form className="w-3/12 absolute p-12 bg-black bg-opacity-80 my-36 mx-auto right-0 left-0 text-white">
        <h1 className="font-bold text-3xl py-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 bg-gray-700 w-full"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 bg-gray-700 w-full"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 bg-gray-700 w-full"
        />
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg">
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={() => toggleSignInForm()}>
          {isSignIn
            ? "New to Netflix? Sign Up Now"
            : "Already registered! Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
