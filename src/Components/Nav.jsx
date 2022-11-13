import home from "../logo.svg";
import meta from "../meta.svg";

import { Outlet } from "react-router-dom";
export const Nav = () => {
  return (
    <div>
      <header className="hdr">
        <div className="m-logo">
          <img alt="logo" src={home} />
          <img alt="meta" src={meta} />
        </div>
        <nav className="nav">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Place to stay</a>
            </li>
            <li>
              <a href="#">NFTs</a>
            </li>
            <li>
              <a href="#">Community</a>
            </li>
          </ul>
        </nav>
        <button className="connect-btn">Connect wallet</button>
      </header>
      <Outlet />
    </div>
  );
};
export default Nav;
