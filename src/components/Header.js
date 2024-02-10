import { useState } from "react";
import LOGO_URL from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

export const Header = () => {
  const [btnName, setBtnName] = useState("login");
  const onLineStatus = useOnlineStatus();
  return (
    <div className="header">
      <img src={LOGO_URL} />
      <ul>
        <li>{onLineStatus === false ? "offline" : "online"}</li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/contact">Contact us</Link>
        </li>
        <li>
          <Link to="/grocery">Grocery</Link>
        </li>
        <li>Cart</li>
        <button
          type="button"
          onClick={() =>
            btnName === "login" ? setBtnName("logout") : setBtnName("login")
          }
        >
          {btnName}
        </button>
      </ul>
    </div>
  );
};

export default Header;
