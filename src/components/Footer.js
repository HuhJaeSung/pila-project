import React from 'react';
import './Footer.css';
import useActions from '../hooks/useActions';

function Footer() {
  const { setMode } = useActions();

  return (
    <>
      <div className="footer-background">
        <div className="Footer-container">
          <div className="Footer-Buttons">
            <div>당근필라 소개</div>
            <div>멤버 소개</div>
            <div>사용자 이용 약관</div>
            <div>개인정보 취급방침</div>
            <div>자주 묻는 질문</div>
            <div>문의하기</div>
          </div>
          <div className="Footer-contents">
            <div>
              <span>(주) 당근필라</span>
              <span>|</span>
              <span>대표 JSTSDK</span>
              <span>|</span>
              <span>개인정보보호책임자 JS</span>
            </div>
            <div>
              <span>사업자 번호</span>
              <span>|</span>
              <span>통신판매업 제 -- 호</span>
            </div>
            <div>주소 SK하이닉스</div>
          </div>
          <div className="Footer-icons">
            <div className="icon-container">
              <span>YT</span>
              <span>IG</span>
              <span>FB</span>
              <span>KKO</span>
              <span>Carrot</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
