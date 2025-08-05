import { useState } from "react";
import LOGO_URL from "../utils/constant";
import { Link, useLocation } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

export const Header = () => {
  const [btnName, setBtnName] = useState("login");
  const onLineStatus = useOnlineStatus();
  const location = useLocation();
  let btnNameReact = "login" 

  const isActiveRoute = (route) => {
    console.log(route);
    return route === "/restaurant" ? true : location.pathname === route;
  };

  return (
    <header className="w-full max-w-[68rem] mx-auto my-0 ">
      <nav className="flex gap-4 items-center ">
        <div>
          <img className="w-36 h-7" src={LOGO_URL} />
        </div>
        <ul className="flex w-full max-w-full my-4 justify-between text-gray-500 items-center">
          <li className="w-4/5">
            <div className="flex border-gray-500 shadow-md rounded-md p-4 items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#FF7E8B"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                aria-labelledby="icon-svg-title- icon-svg-desc-"
                role="img"
                className="sc-rbbb40-0 iRDDBk"
              >
                <title>location-fill</title>
                <path d="M10.2 0.42c-4.5 0-8.2 3.7-8.2 8.3 0 6.2 7.5 11.3 7.8 11.6 0.2 0.1 0.3 0.1 0.4 0.1s0.3 0 0.4-0.1c0.3-0.2 7.8-5.3 7.8-11.6 0.1-4.6-3.6-8.3-8.2-8.3zM10.2 11.42c-1.7 0-3-1.3-3-3s1.3-3 3-3c1.7 0 3 1.3 3 3s-1.3 3-3 3z"></path>
              </svg>
              <div className="flex justify-between w-2/5 items-center">
                <div>Pune</div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#4F4F4F"
                  width="12"
                  height="12"
                  viewBox="0 0 20 20"
                  aria-labelledby="icon-svg-title- icon-svg-desc-"
                  role="img"
                  className="sc-rbbb40-0 ezrcri"
                >
                  <title>down-triangle</title>
                  <path d="M20 5.42l-10 10-10-10h20z"></path>
                </svg>
              </div>
              <div>|</div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#828282"
                width="18"
                height="18"
                viewBox="0 0 20 20"
                aria-labelledby="icon-svg-title- icon-svg-desc-"
                role="img"
                className="sc-rbbb40-0 iwHbVQ"
              >
                <title>Search</title>
                <path d="M19.78 19.12l-3.88-3.9c1.28-1.6 2.080-3.6 2.080-5.8 0-5-3.98-9-8.98-9s-9 4-9 9c0 5 4 9 9 9 2.2 0 4.2-0.8 5.8-2.1l3.88 3.9c0.1 0.1 0.3 0.2 0.5 0.2s0.4-0.1 0.5-0.2c0.4-0.3 0.4-0.8 0.1-1.1zM1.5 9.42c0-4.1 3.4-7.5 7.5-7.5s7.48 3.4 7.48 7.5-3.38 7.5-7.48 7.5c-4.1 0-7.5-3.4-7.5-7.5z"></path>
              </svg>
              <input
                className="w-3/5"
                placeholder="Search for restaurant, cuisine or a dish"
              />
            </div>
          </li>
          <li>
            <button
              className="login"
              onClick={() => {
                btnNameReact === "login"
                  ? setBtnName("logout")
                  : setBtnName("login");
              }}
            />
          </li>
          <li>Sign up</li>
        </ul>
      </nav>

      <section className="py-4 text-gray-500 text-xs">
        <span>Home / India / Pune restaurants</span>
      </section>

      <section>
        <ul
          className={
            isActiveRoute("/restaurant") ? `hidden` : `flex gap-8 text-xl`
          }
        >
          <li>
            <div className="flex items-center gap-3 px-3">
              <div
                className={`grid place-items-center justify-center w-16 h-16 rounded-full ${
                  isActiveRoute("/about") ? "bg-sky-100" : "bg-gray-100"
                }`}
              >
                <img
                  className="w-7"
                  alt="dining out"
                  src="https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png?output-format=webp"
                />
              </div>
              <Link to="/about">Dining Out</Link>
            </div>
            <div>
              <div>
                {isActiveRoute("/about") && (
                  <hr className="h-1 mt-3 bg-red-400" />
                )}
              </div>
            </div>
          </li>
          <li>
            <div className="flex items-center gap-3 px-3">
              <div
                className={`grid place-items-center justify-center w-16 h-16 rounded-full ${
                  isActiveRoute("/") ? "bg-yellow-100" : "bg-gray-100"
                }`}
              >
                <img
                  className="w-7"
                  alt="delivery"
                  src="https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png?output-format=webp"
                />
              </div>
              <Link to="/">Delivery</Link>
            </div>
            <div>
              {isActiveRoute("/") && <hr className="h-1 mt-3 bg-red-400" />}
            </div>
          </li>
          <li>
            <div className="flex items-center gap-3 px-3">
              <div
                className={`grid place-items-center justify-center w-16 h-16  rounded-full  ${
                  isActiveRoute("/contact") ? "bg-blue-100" : "bg-gray-100"
                }`}
              >
                <img
                  className="w-7"
                  alt="delivery"
                  src="https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png?output-format=webp"
                />
              </div>
              <Link to="/contact">NightLife</Link>
            </div>
            <div>
              <div>
                {isActiveRoute("/contact") && (
                  <hr className="h-1 mt-3 bg-red-400" />
                )}
              </div>
            </div>
          </li>
        </ul>
      </section>

      {/* <ul className="flex">
        <li>{onLineStatus === false ? "offline" : "online"}</li>
        <li>
          <Link to="/">Delivery</Link>
        </li>
        <li>
          <Link to="/about">Dining Out</Link>
        </li>
        <li>
          <Link to="/contact">NightLife</Link>
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
      </ul> */}
    </header>
  );
};

export default Header;
