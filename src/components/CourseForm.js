import React, { useState } from "react";
import useMode from "../hooks/useMode";

function Update() {
  return (
    <>
      <h1>수정하는 곳</h1>
    </>
  );
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
            <input type="date" name="date" />
          </p>
          <p>
            <input
              type="number"
              name="price"
              min="15000"
              max="50000"
              step="1000"
            />
          </p>
          <p>
            <input
              type="tel"
              name="phonenumber"
              placeholder="010XXXXXXXX"
            ></input>
            <small>Format: 010XXXXXXXXX</small>
          </p>
          <p>
            <input type="checkbox" name="chcek1" value="Personal" /> 개인
            <input type="checkbox" name="chcek2" value="Group" /> 그룹
            <input type="checkbox" name="check3" value="Item" /> 도구
            <input type="checkbox" name="check4" value="Mix" /> 혼합
          </p>
          <p>
            <small>Tax Free</small>
            <br />
            <input type="radio" id="free" name="Taxfree" value="true" />
            <label htmlFor="free">O</label>
            <br />
            <input type="radio" id="notFree" name="Taxfree" value="false" />
            <label htmlFor="notFree">X</label>
          </p>
          <p>
            <textarea type="text" name="desc" placeholder="추가설명"></textarea>
          </p>
          <p>
            <input type="submit" value="등록하기"></input>
          </p>
        </div>
      </form>
    </>
  );
}

function Welcome() {
  return <h1>Welcome</h1>;
}

function CourseForm() {
  const mode = useMode();
  const [id, setId] = useState(null);
  let content = null;

  if (mode === "WELCOME") {
    content = <Welcome />;
  } else if (mode === "CREATE") {
    content = <Create onCreate={(title, body) => {}}></Create>;
  } else if (mode === "UPDATE") {
    content = <Update></Update>;
  }
  return <div>{content}</div>;
}

export default CourseForm;
