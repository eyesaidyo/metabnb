import house1 from "../Frame 143.png";
import house2 from "../frame144.png";
import house3 from "../frame145.png";
import house4 from "../frame146.png";
import house5 from "../frame147.png";
import house6 from "../frame148.png";
import house7 from "../frame149.png";
import house8 from "../frame150.png";
import house9 from "../img9.png";
import house10 from "../img10.png";
import house11 from "../img11.png";
import house12 from "../img12.png";
import house13 from "../img13.png";
import house14 from "../img14.png";
import house15 from "../img15.png";
import house16 from "../img16.png";
import loc from "../location.svg";
export const PlaceToStay = () => {
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
        <img alt="sort" src={loc} />
      </div>
      <div className="card-container">
        <img src={house5} />
        <img src={house6} />
        <img src={house7} />
        <img src={house8} />
        <img src={house1} />
        <img src={house3} />
        <img src={house2} />
        <img src={house4} />
        <img src={house9} />
        <img src={house10} />
        <img src={house11} />
        <img src={house12} />
        <img src={house13} />
        <img src={house14} />
        <img src={house15} />
        <img src={house16} />
      </div>
    </>
  );
};
