import React from "react";
import "../styles/Header.scss";

const Header = () => {
  return (
    <div className="header-container">
      <div className="navigation">
        <div className="navigation-title">
          <h1>
            Dev<span>challenges.io</span>
          </h1>
        </div>
        <div className="navigation-links">
          <ul>
            <li>
              <a href="#">Typography</a>
            </li>
            <li>
              <a href="#">Grid</a>
            </li>
            <li>
              <a href="#">Buttons</a>
            </li>
            <li>
              <a href="#" id="hover">
                Inputs
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
