import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import useActions from "../hooks/useActions";
import useCenter from "../hooks/useCenter";
import useCourse from "../hooks/useCourse";
import useMode from "../hooks/useMode";
import useSiderbar from "../hooks/useSiderbar";
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

  const { courses } = useCenter();
  const [nextId, setNextId] = useState(
    courses.length ? courses[courses.length - 1].id + 1 : 1
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittingError, setSubmittingError] = useState(null);
  const { sidebar, coursebar } = useSiderbar();
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
  const { courses } = useCenter();
  const course = useCourse();
  const { sidebar, coursebar } = useSiderbar();
  const { setSidebar, setMode, setCoursebar, setCourse } = useActions();

  const BEFORE_CENTER_VALUES = {
    date: course.date,
    price: course.price,
    phonenumber: course.phonenumber,
    classtype: course.classtype,
    taxfree: course.taxfree,
    desc: course.desc,
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
      await courses((prevItems) => [
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
  const mode = useMode();
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
