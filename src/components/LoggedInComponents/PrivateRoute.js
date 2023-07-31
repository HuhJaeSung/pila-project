import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../../providers/AuthContext";
import SignIn from "../signupComponents/SignIn";

function PrivateRoute({ element: Component, ...rest }) {
  const { isLoggedIn } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) => {
        isLoggedIn ? <SignIn {...props} /> : <Redirect to='/login' />;
      }}
    />
  );
}

// TODO : 로그인 상태에 따른 화면 리디렉션 구현

export default PrivateRoute;
