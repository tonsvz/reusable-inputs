import React from "react";

const Main = (props) => {
  return (
    <div className="main-container">
      <div className="input-wrapper">
        <p className={props.classType}>{props.label}</p>
        <input type={props.text} placeholder={props.placeholder} />
      </div>
    </div>
  );
};

export default Main;
