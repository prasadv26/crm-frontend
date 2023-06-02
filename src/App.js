import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@coreui/coreui/dist/css/coreui.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "react-circular-progressbar/dist/styles.css";
import Login from "./pages/Auth";
import Admin from "./pages/Admin";
import Engineer from "./pages/Engineer";
import Customer from "./pages/Customer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "./hoc/auth";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/customer"
            element={
              <Auth>
                <Customer />
              </Auth>
            }
          />
          <Route
            path="/admin"
            element={
              <Auth>
                <Admin />
              </Auth>
            }
          />
          <Route
            path="/engineer"
            element={
              <Auth>
                <Engineer />
              </Auth>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
