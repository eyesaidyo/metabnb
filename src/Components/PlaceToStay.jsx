import pic1 from "./pic1.svg";
import pic0 from "./pic0.svg";
import pic2 from "./pic2.svg";
import pic3 from "./pic3.svg";
import pic4 from "./pic4.svg";
import pic5 from "./pic5.svg";
import pic6 from "./pic6.svg";
import pic7 from "./pic7.svg";
import pic8 from "./pic8.svg";
import pic9 from "./pic9.svg";
import pic10 from "./pic10.svg";
import pic11 from "./pic11.svg";
import pic12 from "./pic12.svg";
import pic13 from "./pic13.svg";
import pic14 from "./pic14.svg";
import pic15 from "./pic15.svg";
import loc from "../location.svg";
import { Card } from "./Card";
export const PlaceToStay = () => {
  const pics = [
    pic0,
    pic1,
    pic2,
    pic3,
    pic4,
    pic5,
    pic6,
    pic7,
    pic8,
    pic9,
    pic10,
    pic11,
    pic12,
    pic13,
    pic14,
    pic15,
  ];
  return (
    <>
      <div className="locations">
        <span>Restaurant</span>
        <span>Cottage</span>
        <span>Castle</span>
        <span>Fantasy City</span>
        <span>Beach</span>
        <span>Cabins</span>
        <span>Off-grid</span>
        <span>Farms</span>
        <img className="sort" alt="sort" src={loc} />
      </div>
      <div className="card-container">
        {pics.map((pic) => (
          <Card pic={pic} />
        ))}
      </div>
    </>
  );
};
