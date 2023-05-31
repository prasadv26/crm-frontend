import { useEffect, useState } from "react";
import { login } from "../api/auth";

function Auth() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    const userType = localStorage.getItem("userType");
    const token = localStorage.getItem("token");

    if (!(userType || token)) return;
    else if (userType === "CUSTOMER") {
      window.location.href = "/customer";
    } else if (userType === "ENGINEER") {
      window.location.href = "/engineer";
    } else if (userType === "ADMIN") {
      window.location.href = "/admin";
    }
  }, []);

  function onFormDataChange(e) {
    const id = e.target.id;
    if (id === "userId") {
      setUserId(e.target.value);
    }
    if (id === "password") {
      setPassword(e.target.value);
    }
  }

  function clearState() {
    setMessage("");
  }

  function onSignIn(e) {
    clearState();
    e.preventDefault();
    if (userId.length < 3) {
      setError(true);
      setMessage("Username should be longer than 2 letters");
      return;
    }
    if (password.length < 3) {
      setError(true);
      setMessage("Password should be longer than 5 letters");
      return;
    }
    //console.log(userId + " " + password);
    const loginDetails = { userId, password };
    login(loginDetails)
      .then((res) => {
        console.log(res);
        setMessage("Login Successful!");
        localStorage.setItem("name", res.data.name);
        localStorage.setItem("userStatus", res.data.userStatus);
        localStorage.setItem("token", res.data.accessToken);
        localStorage.setItem("userType", res.data.userType);
        window.location.reload();
      })
      .catch((err) => setMessage(err.response.data.message));
  }
  return (
    <>
      <div className="bg-info d-flex justify-content-center align-items-center vh-100">
        <div
          style={{ width: "25rem" }}
          className="card p-3 shadow-lg rounded-4 text-center"
        >
          <h4 className="text-info">Sign In</h4>
          <form onSubmit={onSignIn}>
            <div className="input-group">
              <input
                className="form-control m-1"
                type="text"
                placeholder="username"
                id="userId"
                value={userId}
                onChange={onFormDataChange}
              />
            </div>
            <div className="input-group">
              <input
                className="form-control m-1"
                type="password"
                placeholder="password"
                id="password"
                value={password}
                onChange={onFormDataChange}
              />
            </div>
            <div className="input-group">
              <input
                className="form-control m-2 btn btn-info text-white"
                type="submit"
                value={"Sign In"}
              />
            </div>
            <div className={error ? "text-danger" : "text-success"}>
              {message}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default Auth;
