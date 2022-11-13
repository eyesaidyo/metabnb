import img4 from "../image4.png";
import img6 from "../image 6.png";
import img3 from "../image 3.png";
import img5 from "../image 5.png";
import mbtoken from "../mbtoken.svg";
import metamask from "../metamask.svg";
import opensea from "../opensea.svg";
import house1 from "../Frame 143.png";
import house2 from "../frame144.png";
import house3 from "../frame145.png";
import house4 from "../frame146.png";
import house5 from "../frame147.png";
import house6 from "../frame148.png";
import house7 from "../frame149.png";
import house8 from "../frame150.png";
import nfts1 from "../nfts1.png";
import m from "../meta-white.svg";
import facebook from "../facebook.svg";
import insta from "../insta.svg";
import twitter from "../twitter.svg";
import copy from "../copy.svg";
export const Home = () => {
  return (
    <>
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
        <img src={house1} />
        <img src={house3} />
        <img src={house2} />
        <img src={house4} />
        <img src={house5} />
        <img src={house6} />
        <img src={house7} />
        <img src={house8} />
      </div>
      <div className="nft">
        <div className="left">
          <h1>Metabnb NFTs</h1>
          <p>
            Metabnb NFTs Discover our NFT gift cards collection. Loyal customers
            gets amazing gift cards which are traded as NFTs. These NFTs gives
            our cutomer access to loads of our exclusive services.
          </p>
          <button className="btn-learn">Learn more</button>
        </div>
        <div className="right">
          <img className="nft-img" src={nfts1} />
        </div>
      </div>
      <div className="footer">
        <div className="ft-left">
          <img className="meta-white" alt="metabnb" src={m} />
          <div className="socials">
            <img alt="facebook" src={facebook} />
            <img alt="instagram" src={insta} />
            <img alt="twitter" src={twitter} />
          </div>
          <div className="copyright">
            <p>
              <img alt="copyright" src={copy} />
              &nbsp;2022 Metabnb
            </p>
          </div>
        </div>
        <div className="ft-right">
          <div>
            <ul>
              <li className="list-head">Community</li>
              <li className="list-item">NFT</li>
              <li className="list-item">Tokens</li>
              <li className="list-item">Landlords</li>
              <li className="list-item">Discord</li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="list-head">Places</li>
              <li className="list-item">Castle</li>
              <li className="list-item">Farms</li>
              <li className="list-item">Beach</li>
              <li className="list-item">Learn more</li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="list-head">About us</li>
              <li className="list-item">Road map</li>
              <li className="list-item">Creators</li>
              <li className="list-item">Career</li>
              <li className="list-item">Contact us</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};