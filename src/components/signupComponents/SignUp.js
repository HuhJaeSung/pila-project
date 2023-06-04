import React, { useState } from "react";
import styles from "./SignUp.module.css";

function SignUp() {
  // const [submit, setSubmit] = useState('');

  const [modalOpen, setModalOpen] = useState(false);

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleSubmit = (e) => {
    // setSubmit(e.target.value)
    setModalOpen(true);
    console.log("Hi");
  };
  return (
    <>
      <div className={styles.container}>
        <div id={styles.SignUpContainer}>
          <form className={styles.inputForm}>
            <label>ID</label>
            <input placeholder='아이디' />
            <label>Password</label>
            <input placeholder='비밀번호' />
            <button onClick={handleSubmit}>Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignUp;
