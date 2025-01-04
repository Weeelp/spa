import React from "react";
import cl from "./MyButton.module.css";

const MyButton = ({ children, ...props }) => {
  return (
    <button {...props} className={cl.MyBtn}>
      {children}
    </button>
  );
};

export default MyButton;
