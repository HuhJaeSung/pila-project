import React from "react";
import styles from "./SignUp.module.css";

function SignUp() {
  return (
    <>
      <div id={styles.SignUpContainer}>
        <form>
          <input placeholder="아이디" />
          <input placeholder="비밀번호" />
          <button>로그인</button>
        </form>
      </div>

      {/* <form className="CenterForm" onSubmit={handleCreateSubmit}>
        <label htmlFor="title">Center명</label>
        <input
          name="title"
          value={values.title}
          placeholder="Center 이름"
          onChange={handleChange}
        />
        <label htmlFor="location">주소</label>
        <input
          name="location"
          value={values.location}
          placeholder="경기도 이천시"
          onChange={handleChange}
        />
        <button type="submit" disabled={isSubmitting}>
          등록하기
        </button>
        {onCancel && <button onClick={onCancel}>취소</button>}
        {submittingError?.message && <div>{submittingError.message}</div>}
      </form> */}
    </>
  );
}

export default SignUp;
