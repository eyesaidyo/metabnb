import "./styles.css";
import home from "./logo.svg";
import meta from "./meta.svg";
import img4 from "./image4.png";
import img6 from "./image 6.png";
import img3 from "./image 3.png";
import img5 from "./image 5.png";
import mbtoken from "./mbtoken.svg";
import metamask from "./metamask.svg";
import opensea from "./opensea.svg";
import house1 from "./house1.png";
import { Routes, Route, Link } from "react-router-dom";
export default function App() {
  return (
    <div className="App">
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
      <div className="main">
        <div className="main-a">
          <h1 className="main-heading">
            Rent a <span className="bolden">Place</span> away from{" "}
            <span className="bolden">Home</span> in the{" "}
            <span className="bolden">Metaverse</span>
          </h1>
          <p className="main-para">
            we provide you access to luxury and affordable houses in the
            metaverse, get a chance to turn your imagination to reality at your
            comfort zone
          </p>
          <div className="search">
            <input
              className="search-txt"
              placeholder="Search for location"
              type="search"
            />
            <button className="sub-btn" type="submit">
              Search
            </button>
          </div>
        </div>
        <div className="pics">
          <div className="pics1">
            <img className="tile" alt="tile" src={img4} />
            <img className="tile" alt="tile" src={img6} />
          </div>
          <div className="pics2">
            <img className="tile" alt="tile" src={img3} />
            <img className="tile" alt="tile" src={img5} />
          </div>
        </div>
      </div>
      <div className="tail">
        <img className="sponsor" alt="mbtoken" src={mbtoken} />
        <img className="sponsor" alt="metamask" src={metamask} />
        <img className="sponsor" alt="opensea" src={opensea} />
      </div>

      <h1 className="inspira">Inspiration for your next adventure</h1>
      <div className="card-container">
        <div className="my-card"></div>
        <img src={house1} />
        <ul className="info1"></ul>
      </div>
    </div>
  );
}
