import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const onlineStatus = useOnlineStatus();

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li>
            <Link to="/" className="link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="link">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contact" className="link">
              Contact Us
            </Link>
          </li>
          <li>
            <Link to="/grocery" className="link">
              Grocery
            </Link>
          </li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
