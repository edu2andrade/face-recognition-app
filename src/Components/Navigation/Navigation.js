import React from "react";

const Navigation = ({ onRouteChange, isSignedIn }) => {
    if (isSignedIn) {
      return (
        <nav>
          <p onClick={() => onRouteChange("Signout")}
          className="f6 tr link pa3 dim white underline pointer">Sign Out</p>
        </nav>
      );
    } else {
      return (
        <nav className="flex justify-end">
          <p onClick={() => onRouteChange("Signin")}
          className="f6 tr link pa3 dim white underline pointer">Sign In</p>
          <p onClick={() => onRouteChange("Register")}
          className="f6 tr link pa3 dim white underline pointer">Register</p>
        </nav>
      );
    }
};

export default Navigation;
