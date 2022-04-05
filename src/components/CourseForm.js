import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import useActions from "../hooks/useActions";
import useCenter from "../hooks/useCenter";
import useMode from "../hooks/useMode";
import useSiderbar from "../hooks/useSiderbar";
import "./CourseForm.css";

const INITIAL_VALUES = {
  date: "",
  price: 0,
  phonenumber: "",
  classtype: "",
  taxfree: null,
  desc: "",
};
const SELECT_LIST = ["개인", "그룹", "도구", "혼합"];

function Create() {
  const [values, setValues] = useState(INITIAL_VALUES);

  const center = useCenter();
  const { courses } = center;
  const [nextId, setNextId] = useState(
    courses.length ? courses[courses.length - 1].id + 1 : 1
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittingError, setSubmittingError] = useState(null);
  const { sidebar, coursebar } = useSiderbar();
  const { setSidebar, setMode, setCoursebar, setCourse } = useActions();

  const handleCreateSubmit = async (e) => {
    e.preventDefault();
    const newCourse = {
      id: nextId,
      key: `cl-${nextId}`,
      date: values.date,
      price: parseInt(values.price),
      phonenumber: values.phonenumber,
      classtype: values.classtype,
      taxfree: values.taxfree,
      desc: values.desc,
    };
    // console.log(newCourse);
    try {
      setSubmittingError(null);
      setIsSubmitting(true);
      await courses.push(newCourse);
      setCourse(newCourse);
    } catch (error) {
      setSubmittingError(error);
      return;
    } finally {
      setIsSubmitting(false);
      if (!sidebar) {
        setSidebar(!sidebar);
      }
      if (!coursebar) {
        setCoursebar(!coursebar);
      }
      setNextId(nextId + 1);
      setValues(INITIAL_VALUES);
      setMode("WELCOME");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return (
    <form className="CourseForm" onSubmit={handleCreateSubmit}>
      <label htmlFor="date">강좌 날짜</label>
      <input
        type="date"
        name="date"
        value={values.date}
        onChange={handleChange}
      />
      <label htmlFor="price">대강 가격</label>
      <input
        type="number"
        name="price"
        min="15000"
        max="50000"
        step="1000"
        value={values.price}
        onChange={handleChange}
      />
      <label htmlFor="price">폰 번호</label>
      <input
        type="tel"
        name="phonenumber"
        placeholder="010XXXXXXXX"
        value={values.phonenumber}
        onChange={handleChange}
      />
      <label htmlFor="classtype">수업 유형</label>
      <select name="classtype" onChange={handleChange} value={values.classtype}>
        {SELECT_LIST.map((item) => (
          <option value={item} key={item}>
            {item}
          </option>
        ))}
      </select>
      {/* <div>
        <input type="checkbox" name="chcek1" value="개인" /> 개인
        <input type="checkbox" name="chcek2" value="그룹" /> 그룹
        <input type="checkbox" name="check3" value="도구" /> 도구
        <input type="checkbox" name="check4" value="혼합" /> 혼합
      </div> */}
      <label htmlFor="taxfree">세금 감면</label>
      <div>
        <label htmlFor="free">O</label>
        <input
          type="radio"
          id="free"
          name="taxfree"
          value={true}
          onChange={handleChange}
        />
        <label htmlFor="notFree">X</label>
        <input
          type="radio"
          id="notFree"
          name="taxfree"
          value={"X"}
          onChange={handleChange}
        />
      </div>
      <label htmlFor="desc">상세 내용</label>
      <textarea
        type="text"
        name="desc"
        placeholder="추가설명"
        value={values.desc}
        onChange={handleChange}
      ></textarea>
      <button type="submit" disabled={isSubmitting}>
        등록하기
      </button>
      {submittingError?.message && <div>{submittingError.message}</div>}
    </form>
  );
}

function Update() {
  // const [isSubmitting, setIsSubmitting] = useState(false);
  // const [submittingError, setSubmittingError] = useState(null);
  // const { sidebar, coursebar } = useSiderbar();
  // const { setSidebar, setMode, setCoursebar, setCourse } = useActions();
  // const onCancel = () => {
  //   setMode("WELCOME");
  //   return;
  // };
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setValues((prevValues) => ({
  //     ...prevValues,
  //     [name]: value,
  //   }));
  // };
  // return (
  //   <form className="CourseForm" onSubmit={handleCreateSubmit}>
  //     <label htmlFor="date">강좌 날짜</label>
  //     <input
  //       type="date"
  //       name="date"
  //       value={values.date}
  //       onChange={handleChange}
  //     />
  //     <label htmlFor="price">대강 가격</label>
  //     <input
  //       type="number"
  //       name="price"
  //       min="15000"
  //       max="50000"
  //       step="1000"
  //       value={values.price}
  //       onChange={handleChange}
  //     />
  //     <label htmlFor="price">폰 번호</label>
  //     <input
  //       type="tel"
  //       name="phonenumber"
  //       placeholder="010XXXXXXXX"
  //       value={values.phonenumber}
  //       onChange={handleChange}
  //     />
  //     <label htmlFor="classtype">수업 유형</label>
  //     <select name="classtype" onChange={handleChange} value={values.classtype}>
  //       {SELECT_LIST.map((item) => (
  //         <option value={item} key={item}>
  //           {item}
  //         </option>
  //       ))}
  //     </select>
  //     {/* <div>
  //       <input type="checkbox" name="chcek1" value="개인" /> 개인
  //       <input type="checkbox" name="chcek2" value="그룹" /> 그룹
  //       <input type="checkbox" name="check3" value="도구" /> 도구
  //       <input type="checkbox" name="check4" value="혼합" /> 혼합
  //     </div> */}
  //     <label htmlFor="taxfree">세금 감면</label>
  //     <div>
  //       <label htmlFor="free">O</label>
  //       <input
  //         type="radio"
  //         id="free"
  //         name="taxfree"
  //         value={true}
  //         onChange={handleChange}
  //       />
  //       <label htmlFor="notFree">X</label>
  //       <input
  //         type="radio"
  //         id="notFree"
  //         name="taxfree"
  //         value={"X"}
  //         onChange={handleChange}
  //       />
  //     </div>
  //     <label htmlFor="desc">상세 내용</label>
  //     <textarea
  //       type="text"
  //       name="desc"
  //       placeholder="추가설명"
  //       value={values.desc}
  //       onChange={handleChange}
  //     ></textarea>
  //     <button type="submit" disabled={isSubmitting}>
  //       등록하기
  //     </button>
  //     {submittingError?.message && <div>{submittingError.message}</div>}
  //     {onCancel && <button onClick={onCancel}>취소</button>}
  //   </form>
  // );
}

function CourseForm() {
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

export default CourseForm;
