import useActions from '../hooks/useActions';
import { NavLink } from 'react-router-dom';
import './AddClassButton.css';

function AddClassButton() {
  const { setMode } = useActions();
  // const [button, setButton] = useState("");

  const handleClick = () => {
    setMode('CREATE');
  };

  // NavLink는 Link에서 active className을 추가해서 현재 상태를 돋보이게 함.
  // 기능은 Link와 동일
  return (
    <>
      <NavLink to="/form">
        <div className="AddClassButton" onClick={handleClick}></div>
      </NavLink>
    </>
  );
}

export default AddClassButton;
