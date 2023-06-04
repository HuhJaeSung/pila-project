import React from "react";
import styles from "./SignUpPopup.module.css";

const Modal = (props) => {
  const { open, close, header } = props;

  return (
    // 모달이 열릴 때, openModal 클래스가 생성된다.
    <div className={open ? "openModal modal" : "modal"}>
      {open ? (
        <section>
          <header>
            {header}
            <button className='close' onClick={close}>
              &times;
            </button>
          </header>
          <main>{props.children}</main>
          <footer>
            <button className='close' onClick={close}>
              close
            </button>
          </footer>
        </section>
      ) : null}
    </div>
  );
};
