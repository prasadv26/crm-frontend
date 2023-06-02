import { useLocation } from "react-router-dom";

function Auth(props) {
  const location = useLocation();
  //   console.log();

  //authentication
  const userType = localStorage.getItem("userType");
  if (!userType) {
    return <h2>You need to be Logged in to access this page!</h2>;
  }

  //authorization
  if (userType.toLowerCase() !== location.pathname.slice(1).toLowerCase()) {
    return <h2>You do not have permission to access this page </h2>;
  }
  return <div>{props.children}</div>;
}

export default Auth;
