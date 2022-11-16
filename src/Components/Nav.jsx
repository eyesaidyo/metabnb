import home from "../logo.svg";
import meta from "../meta.svg";
import { Footer } from "./Footer";
import { Outlet, Link } from "react-router-dom";
import { useState } from "react";
import { Modal } from "./Modal";
export const Nav = () => {
  const [modal, setModal] = useState(false)
  const toggleModal = () => {
    setModal(!modal)
  }
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
      {
        modal && <Modal modal={toggleModal} />
      }
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
        <button onClick={toggleModal} className="connect-btn">Connect wallet</button>
      </header>
      <div style={drop} className="nav-mobile">
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
        <button onClick={toggleModal} className="connect-btn">Connect wallet</button>
      </div>
      <button onClick={toggleModal} className="connect-btn2">Connect wallet</button>
      <Outlet />
      <Footer />
      <div className='modal'>
        <div className='overlay'>
          <div className='modal-content'>
            <h2> hello world</h2>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Nav;
