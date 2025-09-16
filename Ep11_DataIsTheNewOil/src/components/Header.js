import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const onlineStatus = useOnlineStatus();

  // const data = useContext(UserContext);
  const { loggedInUser } = useContext(UserContext);

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-200">
      <div className="logo-container">
        <img className="w-26" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-4">
            <Link to="/" className="link">
              Home
            </Link>
          </li>
          <li className="px-4">
            <Link to="/about" className="link">
              About Us
            </Link>
          </li>
          <li className="px-4">
            <Link to="/contact" className="link">
              Contact Us
            </Link>
          </li>
          <li className="px-4">
            <Link to="/grocery" className="link">
              Grocery
            </Link>
          </li>
          <li className="px-4">Cart</li>
          <li className="px-4">
            <button
              onClick={() => {
                btnName === "Login"
                  ? setBtnName("Logout")
                  : setBtnName("Login");
              }}
            >
              {btnName}
            </button>
          </li>
          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
