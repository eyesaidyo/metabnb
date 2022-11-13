import home from "../logo.svg";
import meta from "../meta.svg";
import { Footer } from "./Footer";
import { Outlet, Link } from "react-router-dom";
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
      <Outlet />
      <Footer />
    </div>
  );
};
export default Nav;
