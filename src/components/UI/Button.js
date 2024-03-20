import React from "react";
import "./Button.css";

const Button = (props) => {
  return (
    <button
      className="button"
      type={props.type || "button"} //jahan use krenge Button uska jo bhi type hoga wo porps.type se assign ho jayega or jis case me props.type undefined hoga usme "button" assign ho jayega type me ("button" value will be used as a fallback type for custom Button)
      onClick={props.onClick} //JSX button onClick me custom Button ka onclick pass kr rhe hain
    >
      {props.children}
    </button>
    //props.children will give the content inside custom Button
  );
};

export default Button;
