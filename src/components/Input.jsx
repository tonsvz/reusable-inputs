import React from "react";
import "../styles/Input.scss";

const Input = (props) => {
  return (
    <div className="main-container">
      <div className="input-wrapper">
        <p className={props.classType}>{props.label}</p>
        <p className={props.labelClass}>{props.labelText}</p>
        <input
          type={props.text}
          placeholder={props.placeholder}
          className={props.inputClasses}
        />
      </div>
    </div>
  );
};

export default Input;
