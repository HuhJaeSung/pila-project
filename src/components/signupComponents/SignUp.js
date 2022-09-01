import React, { useState } from 'react';
import styles from './SignUp.module.css';

function SignUp() {
  // const [submit, setSubmit] = useState('');

  const handleSubmit = (e) => {
    // setSubmit(e.target.value)
    console.log('Hi');
  };
  return (
    <>
      <div className={styles.container}>
        <div id={styles.SignUpContainer}>
          <form className={styles.inputForm}>
            <label>성명</label>
            <input placeholder="이름" />
            <label>ID</label>
            <input placeholder="아이디" />
            <label>Password</label>
            <input placeholder="비밀번호" />
            <label>연락처</label>
            <input placeholder="휴대폰 번호" />
            <label>E-mail</label>
            <input placeholder="abc@naver.com" />
            <button onClick={handleSubmit}>Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignUp;
