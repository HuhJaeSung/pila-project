import axios from 'axios';
import { useEffect, useState } from 'react';
import styles from './SignIn.module.css';
import { NavLink, Navigate } from 'react-router-dom';
import useActions from '../../hooks/useActions';
import useMode from '../../hooks/useMode';
import Footer from '../Footer';

function SignIn() {
  const [inputId, setInputId] = useState('');
  const [inputPw, setInputPw] = useState('');
  const { mode, setMode } = useActions();

  const onHome = () => {
    <Navigate to="/" />;
  };

  const handleInputId = (e) => {
    setInputId(e.target.value);
  };

  const handleInputPw = (e) => {
    setInputPw(e.target.value);
  };

  const onClickSignIn = () => {
    console.log('click Signin');
  };

  const onCancel = () => {
    setMode('WELCOME');
    console.log(mode);
    return;
  };

  useEffect(() => {
    axios
      .get('/Signin')
      .then((res) => console.log(res))
      .catch();
  }, []);

  return (
    <div>
      <h2>SignIn</h2>
      <div>
        <label htmlFor="input_id">ID : </label>
        <input
          type="text"
          name="input_id"
          value={inputId}
          onChange={handleInputId}
        />
        <div>
          <label htmlFor="input_pw">PW : </label>
          <input
            type="password"
            name="input_pw"
            value={inputPw}
            onChange={handleInputPw}
          />
        </div>
        <div>
          <button
            type="button"
            onClick={onClickSignIn}
            className={styles.Button}
          >
            로그인
          </button>
          <NavLink to="/">
            <button onClick={onCancel}>취소</button>
          </NavLink>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SignIn;
