import home from "../logo.svg";
import meta from "../meta.svg";
import { Footer } from "./Footer";
import { Outlet, Link } from "react-router-dom";
import { useState } from "react";
export const Nav = () => {
  let [drop, setDrop] = useState({ display: "none" });
  function handleClick() {
    setDrop((prev) =>
      prev.display === "none"
        ? { display: "flex", zIndex: 1, flexDirection: "column" }
        : { ...prev, display: "none" }
    );
  }
  return (
    <div>
      <header className="hdr">
        <div className="m-logo">
          <img alt="logo" src={home} />
          <img alt="meta" src={meta} />
        </div>
        <div className="hamburger" id="hamburger">
          <img
            onClick={handleClick}
            src="https://img.icons8.com/external-jumpicon-line-ayub-irawan/32/null/external-hamburger-basic-ui-jumpicon-line-jumpicon-line-ayub-irawan.png"
          />
        </div>

        <nav className="nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/place-to-stay">Place to stay</Link>
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
      <nav style={drop} className="nav-mobile">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/place-to-stay">Place to stay</Link>
          </li>
          <li>
            <a href="#">NFTs</a>
          </li>
          <li>
            <a href="#">Community</a>
          </li>
        </ul>
      </nav>
      <Outlet />
      <Footer />
    </div>
  );
};
export default Nav;
