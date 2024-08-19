import React, { useState } from "react";
import styles from "./Login.module.css";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";

const Login = () => {
  const [email] = useState("");
  const [password] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <div className={styles.form}>
          <form onSubmit={handleSubmit} className={styles.formContent}>
            <h2 className={styles.h2}>Giriş Yap</h2>
            <div className={styles.divider}></div>
            <Input type="email" placeholder="Email" />
            <Input type="password" placeholder="Password" />
            <Button text="GİRİŞ YAP" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
