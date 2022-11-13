import facebook from "../facebook.svg";
import insta from "../insta.svg";
import twitter from "../twitter.svg";
import copy from "../copy.svg";
import m from "../meta-white.svg";
export const Footer = () => {
  return (
    <>
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
