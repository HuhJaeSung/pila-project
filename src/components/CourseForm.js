import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import useActions from "../hooks/useActions";
import "./CourseForm.css";

const SELECT_LIST = ["개인", "그룹", "도구", "혼합"];

const INITIAL_CENTER_DATAFORM = {
  date: "",
  price: 0,
  phonenumber: "",
  classtype: "",
  taxfree: null,
  desc: "",
};

function Create() {
  const [centerValues, setCenterValues] = useState(INITIAL_CENTER_DATAFORM);

  const { center, sidebar, coursebar } = useActions();
  const [nextId, setNextId] = useState(
    center.courses.length ? center.courses[center.courses.length - 1].id + 1 : 1
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittingError, setSubmittingError] = useState(null);
  const { setSidebar, setMode, setCoursebar, setCourse } = useActions();

  const onCancel = () => {
    setMode("WELCOME");
    return;
  };

  const handleCreateSubmit = async (e) => {
    e.preventDefault();
    const newCourse = {
      id: nextId,
      key: `cl-${nextId}`,
      date: centerValues.date,
      price: parseInt(centerValues.price),
      phonenumber: centerValues.phonenumber,
      classtype: centerValues.classtype,
      taxfree: centerValues.taxfree,
      desc: centerValues.desc,
    };
    // console.log(newCourse);
    try {
      setSubmittingError(null);
      setIsSubmitting(true);
      await center.courses.push(newCourse);
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
      setCenterValues(INITIAL_CENTER_DATAFORM);
      setMode("WELCOME");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCenterValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return (
    <form className='CourseForm' onSubmit={handleCreateSubmit}>
      <label htmlFor='date'>강의 일정</label>
      <input
        type='date'
        name='date'
        value={centerValues.date}
        onChange={handleChange}
      />
      <label htmlFor='price'>강의 페이</label>
      <input
        type='number'
        name='price'
        min='15000'
        max='50000'
        step='1000'
        value={centerValues.price}
        onChange={handleChange}
      />
      <label htmlFor='price'>연락처</label>
      <input
        type='tel'
        name='phonenumber'
        placeholder='010XXXXXXXX'
        value={centerValues.phonenumber}
        onChange={handleChange}
      />
      <label htmlFor='classtype'>강의 과목</label>
      <select
        name='classtype'
        onChange={handleChange}
        value={centerValues.classtype}
      >
        {SELECT_LIST.map((item) => (
          <option value={item} key={item}>
            {item}
          </option>
        ))}
      </select>
      <label htmlFor='taxfree'>강의료 세금 공제 여부</label>
      <div>
        <label htmlFor='free'>O</label>
        <input
          type='radio'
          id='free'
          name='taxfree'
          value={true}
          onChange={handleChange}
        />
        <label htmlFor='notFree'>X</label>
        <input
          type='radio'
          id='notFree'
          name='taxfree'
          value={false}
          onChange={handleChange}
        />
      </div>
      <label htmlFor='desc'>기타사항</label>
      <textarea
        type='text'
        name='desc'
        placeholder='추가설명'
        value={centerValues.desc}
        onChange={handleChange}
      ></textarea>
      <button type='submit' disabled={isSubmitting}>
        등록하기
      </button>
      {submittingError?.message && <div>{submittingError.message}</div>}
      {onCancel && <button onClick={onCancel}>취소</button>}
    </form>
  );
}

function Update() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittingError, setSubmittingError] = useState(null);
  const { center, course, sidebar, coursebar } = useActions();
  const { setSidebar, setMode, setCoursebar, setCourse } = useActions();

  const { date, price, phonenumber, classtype, taxfree, desc } = course;

  const BEFORE_CENTER_VALUES = {
    date: date,
    price: price,
    phonenumber: phonenumber,
    classtype: classtype,
    taxfree: taxfree,
    desc: desc,
  };
  const [centerValues, setCenterValues] = useState(BEFORE_CENTER_VALUES);

  const onCancel = () => {
    setMode("WELCOME");
    return;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCenterValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    const newCourse = {
      id: course.id,
      key: course.key,
      date: centerValues.date,
      price: centerValues.price,
      phonenumber: centerValues.phonenumber,
      classtype: centerValues.classtype,
      taxfree: centerValues.taxfree,
      desc: centerValues.desc,
    };
    setCourse(newCourse);
    try {
      setSubmittingError(null);
      setIsSubmitting(true);
      await center.courses((prevItems) => [
        ...prevItems.slice(0, course.id - 1),
        newCourse,
        ...prevItems.slice(course.id),
      ]);
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
      setCenterValues(INITIAL_CENTER_DATAFORM);
      setMode("WELCOME");
    }
  };

  return (
    <form className='CourseForm' onSubmit={handleUpdateSubmit}>
      <label htmlFor='date'>강의 일정</label>
      <input
        type='date'
        name='date'
        value={centerValues.date}
        onChange={handleChange}
      />
      <label htmlFor='price'>강의 페이</label>
      <input
        type='number'
        name='price'
        min='15000'
        max='50000'
        step='1000'
        value={centerValues.price}
        onChange={handleChange}
      />
      <label htmlFor='price'>연락처</label>
      <input
        type='tel'
        name='phonenumber'
        placeholder='010XXXXXXXX'
        value={centerValues.phonenumber}
        onChange={handleChange}
      />
      <label htmlFor='classtype'>강의 과목</label>
      <select
        name='classtype'
        onChange={handleChange}
        value={centerValues.classtype}
      >
        {SELECT_LIST.map((item) => (
          <option value={item} key={item}>
            {item}
          </option>
        ))}
      </select>
      <label htmlFor='taxfree'>강의료 세금 공제 여부</label>
      <div>
        <label htmlFor='free'>O</label>
        <input
          type='radio'
          id='free'
          name='taxfree'
          value={true}
          onChange={handleChange}
        />
        <label htmlFor='notFree'>X</label>
        <input
          type='radio'
          id='notFree'
          name='taxfree'
          value={false}
          onChange={handleChange}
        />
      </div>
      <label htmlFor='desc'>기타사항</label>
      <textarea
        type='text'
        name='desc'
        placeholder='추가설명'
        value={centerValues.desc}
        onChange={handleChange}
      ></textarea>
      <button type='submit' disabled={isSubmitting}>
        수정하기
      </button>
      {submittingError?.message && <div>{submittingError.message}</div>}
      {onCancel && <button onClick={onCancel}>취소</button>}
    </form>
  );
}

function CourseForm() {
  const { mode } = useActions();
  let content = null;

  if (mode === "WELCOME") {
    return <Navigate to='/' />;
  } else if (mode === "CREATE") {
    content = <Create />;
  } else if (mode === "UPDATE") {
    content = <Update />;
  }
  return <div>{content}</div>;
}

export default CourseForm;
