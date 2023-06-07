import React, { useState } from 'react';
import styles from './SignUp.module.css';
import Footer from '../Footer';
import { NavLink } from 'react-router-dom';
import useActions from '../../hooks/useActions';

function SignUp() {
  // const [submit, setSubmit] = useState('');

  const [modalOpen, setModalOpen] = useState(false);
  const { mode, setMode } = useActions();

  const closeModal = () => {
    setModalOpen(false);
  };

  const onCancel = () => {
    setMode('WELCOME');
    console.log(mode);
    return;
  };

  const handleSubmit = (e) => {
    // setSubmit(e.target.value)
    setModalOpen(true);
    console.log('Hi');
  };
  return (
    <>
      <div className={styles.Page}>
        <h1 className={styles.signupTitle}>회원가입</h1>
        <NavLink to="/">
          <button className={styles.signupCancel} onClick={onCancel}>
            취소
          </button>
        </NavLink>
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
        <Footer className={styles.signupFooter} />
      </div>
    </>
  );
}

export default SignUp;
