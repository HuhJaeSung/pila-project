import { useState } from "react";
import useActions from "../hooks/useActions";
import { NavLink } from "react-router-dom";
import "./AddButton.css";

function AddButton() {
  const { setMode } = useActions();
  const [button, setButton] = useState("");

  const handleClick = () => {
    setMode("CREATE");
  };
  return (
    <>
      <NavLink to='/form'>
        <div className='AddButton' onClick={handleClick}></div>
      </NavLink>
    </>
  );
}

export default AddButton;
