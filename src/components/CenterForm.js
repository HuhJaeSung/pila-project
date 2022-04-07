import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import useActions from "../hooks/useActions";
import useCenters from "../hooks/useCenters";
import useMode from "../hooks/useMode";
import "./CenterForm.css";
import posData from "../data.json";
import useSiderbar from "../hooks/useSiderbar";
import useCenter from "../hooks/useCenter";
import { geocoding } from "../api/NaverGeocoording";

const getGeocode = async (address) => {
  // TODO: check address
  const coord = await geocoding(address);
  return coord;
};

const INITIAL_VALUES = {
  title: "",
  location: "",
};

function Create() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittingError, setSubmittingError] = useState(null);
  const { sidebar } = useSiderbar();
  const centers = useCenters();
  const { setCenters, setCenter, setSidebar } = useActions();
  const [nextId, setNextId] = useState(centers[centers.length - 1].id + 1);
  const [values, setValues] = useState(INITIAL_VALUES);
  const { setMode } = useActions();
  const [posi, setPosi] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    const centerGeocode = await getGeocode(values.location);
    console.log(centerGeocode);
    setPosi(centerGeocode);
  };

  const onCancel = () => {
    setMode("WELCOME");
    return;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleCreateSubmit = async (e) => {
    e.preventDefault();
    const newCenter = {
      id: nextId,
      key: `pi-${nextId}`,
      title: values.title,
      location: values.location,
      position: posi,
      courses: [],
    };
    try {
      setSubmittingError(null);
      setIsSubmitting(true);
      await setCenters((prevItems) => [...prevItems, newCenter]);
    } catch (error) {
      setSubmittingError(error);
      return;
    } finally {
      setIsSubmitting(false);
      if (!sidebar) {
        setSidebar(!sidebar);
      }
      setCenter(newCenter);
      setNextId(nextId + 1);
      setValues(INITIAL_VALUES);
      setMode("WELCOME");
    }
  };

  return (
    <form className="CenterForm" onSubmit={handleCreateSubmit}>
      <label htmlFor="title">Center명</label>
      <input
        name="title"
        value={values.title}
        placeholder="Center 이름"
        onChange={handleChange}
      />
      <div>
        <label htmlFor="location">주소</label>
        <input
          name="location"
          value={values.location}
          placeholder="경기도 이천시"
          onChange={handleChange}
        />
        <button onClick={handleSearch} type="submit">
          검색
        </button>
      </div>
      <button type="submit" disabled={isSubmitting}>
        등록하기
      </button>
      {onCancel && <button onClick={onCancel}>취소</button>}
      {submittingError?.message && <div>{submittingError.message}</div>}
    </form>
  );
}

function Update() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittingError, setSubmittingError] = useState(null);
  const sidebar = useSiderbar();
  const center = useCenter();
  const { setCenters, setCenter, setSidebar } = useActions();
  const { id, key, title, location, position, courses } = center;
  const initialValue = { title: title, location: location };
  const [values, setValues] = useState(initialValue);
  const { setMode } = useActions();

  const onCancel = () => {
    setMode("WELCOME");
    return;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    const center = {
      id: id,
      key: key,
      title: values.title,
      location: values.location,
      position: position,
      courses: courses,
    };
    setCenter(center);
    try {
      setSubmittingError(null);
      setIsSubmitting(true);
      await setCenters((prevItems) => [
        ...prevItems.slice(0, center.id - 1),
        center,
        ...prevItems.slice(center.id),
      ]);
    } catch (error) {
      setSubmittingError(error);
      return;
    } finally {
      setIsSubmitting(false);
      if (!sidebar) {
        setSidebar(!sidebar);
      }
      setValues(INITIAL_VALUES);
      setMode("WELCOME");
    }
  };

  return (
    <form className="CenterForm" onSubmit={handleUpdateSubmit}>
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
        수정하기
      </button>
      {onCancel && <button onClick={onCancel}>취소</button>}
      {submittingError?.message && <div>{submittingError.message}</div>}
    </form>
  );
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
