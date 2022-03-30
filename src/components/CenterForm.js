import React, { useState } from "react";

function Welcome() {
  return <h1>Center 등록 페이지</h1>;
}

function Create() {
  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const title = event.target.value;
        }}
      >
        <div>
          <p>
            <input type="text" name="title" />
          </p>
          <p>
            <input
              type="text"
              name="location"
              placeholder="경기도 이천시"
            ></input>
            <small>주소</small>
          </p>
          <p>
            <input type="submit" value="등록하기"></input>
          </p>
        </div>
      </form>
    </>
  );
}

function Update() {
  return <h1>수정 페이지</h1>;
}

function CenterForm() {
  const [mode, setMode] = useState("CREATE");
  const [id, setId] = useState(null);
  let content = null;

  if (mode === "WELCOME") {
    content = <Welcome></Welcome>;
  } else if (mode === "CREATE") {
    content = <Create onCreate={(title, body) => {}}></Create>;
  } else if (mode === "UPDATE") {
    content = <Update></Update>;
  }
  return <div>{content}</div>;
}

export default CenterForm;
