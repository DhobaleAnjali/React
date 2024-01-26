//it allows both defualt and named export
import { useEffect, useState } from "react";
import LOGO_URL from "../utils/constant";

export const Header = () => {
  console.log('header rendered again')
  const [btnName, setBtnName] = useState('login');

  useEffect(()=>{console.log('UseEffect calls')}, [btnName])
    return (
      <div className="header">
        <img src={LOGO_URL} />
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact us</li>
          <li>Cart</li>
          <button type="button" onClick={()=>
          btnName === 'login' ? setBtnName('logout') : setBtnName('login')}>{btnName}</button>
        </ul>
      </div>
    );
  };

  export default Header;
  