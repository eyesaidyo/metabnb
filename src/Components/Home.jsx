import img4 from "../image4.png";
import img6 from "../image 6.png";
import img3 from "../image 3.png";
import img5 from "../image 5.png";
import mbtoken from "../mbtoken.svg";
import metamask from "../metamask.svg";
import opensea from "../opensea.svg";
import pic1 from "./pic1.svg";
import pic0 from "./pic0.svg";
import pic2 from "./pic2.svg";
import pic3 from "./pic3.svg";
import pic4 from "./pic4.svg";
import pic5 from "./pic5.svg";
import pic6 from "./pic6.svg";
import pic7 from "./pic7.svg";
import nfts1 from "../nfts1.png";
import { Card } from "./Card";
export const Home = () => {
  const pics = [pic4, pic5, pic6, pic7, pic0, pic1, pic2, pic3];
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
        {pics.map((card) => (
          <Card pic={card} />
        ))}
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
    </>
  );
};
