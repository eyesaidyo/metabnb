import close from "./x.svg";
import wal from "./wal-con.svg";
import mask from "./m-mask.svg";
import arrow from "./arrow.svg";
import { useState } from "react";
export const Modal = () => {

  const [modal, setModal]=useState(false)
  const toggleModal=()=>{
    setModal(!modal)
  }
  return (
    <div className="modal">
      <div onClick={toggleModal} className="overlay">
        <div className="modal-content">
          <div className="met2">
            Connect Wallet <img onClick={toggleModal} className="close" src={close} />
          </div>
          <hr />
          <div className="met1">
            <div className="left1">
              <img className="icn" src={mask} />
              <div>Metamask</div>
            </div>

            <div>
              <img className="arrow" src={arrow} />
            </div>
          </div>
          <p> Choose your preferred wallet:</p>
          <div className="met1">
            <div className="left1">
              {" "}
              <img className="icn" src={wal} />
              <div>WalletConnect</div>
            </div>

            <div>
              <img className="arrow" src={arrow} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
