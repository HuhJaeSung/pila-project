import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import useActions from "../hooks/useActions";
import useCenters from "../hooks/useCenters";
import useMode from "../hooks/useMode";
import "./CenterForm.css";
import posData from "../data.json";

const INITIAL_VALUES = {
  title: "",
  location: "",
};

function Create() {
  const centers = useCenters();
  const { setCenters } = useActions();
  const [nextId, setNextId] = useState(centers[centers.length - 1].id + 1);
  const [values, setValues] = useState(INITIAL_VALUES);
  const { setMode } = useActions();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCenter = {
      id: nextId,
      key: `pi-${nextId}`,
      title: values.title,
      location: values.location,
      position: posData.positions[nextId],
      courses: [],
    };
    setCenters((prevItems) => [...prevItems, newCenter]);
    setNextId(nextId + 1);
    setValues(INITIAL_VALUES);
    setMode("WELCOME");
  };

  return (
    <form className="CenterForm" onSubmit={handleSubmit}>
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
      <button type="submit">등록하기</button>
    </form>
  );
}

function Update() {
  return <h1>수정 페이지</h1>;
}

function CenterForm() {
  const mode = useMode();
  let content = null;

  if (mode === "WELCOME") {
    return <Navigate to="/" />;
  } else if (mode === "CREATE") {
    content = <Create></Create>;
  } else if (mode === "UPDATE") {
    content = <Update></Update>;
  }
  return <div>{content}</div>;
}

export default CenterForm;
