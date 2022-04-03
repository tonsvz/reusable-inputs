import React from "react";
import "../styles/Main.scss";

const Input = (props) => {
  return (
    <div className="main-container">
      <div className="input-wrapper">
        <p className={props.classType}>{props.label}</p>
        <input type={props.text} placeholder={props.placeholder} />
      </div>
    </div>
  );
};

export default Input;