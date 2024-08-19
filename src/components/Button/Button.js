import React from "react";
import styles from "./Button.module.css";

const Button = ({ text }) => {
  return (
    <button type="submit" className={styles.button}>
      <span className={styles.buttonText}>{text}</span>
    </button>
  );
};

export default Button;
