import React from "react";
import "./style.css";

interface Props {
  children: any;
}

const Background = ({ children }: Props) => {
  return (
    <div className="area">
      {children}
      <ul className="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
};

export default Background;
