import heart from "./heart.svg";
import star from "./star.svg";
export const Card = (props) => {
  return (
    <div className="sample-card">
      {/* <div className="pic-div"> */}
      <img className="pic" src={props.pic} />
      <img className="heart" src={heart} />
      {/* </div> */}
      <div className="bottom-half">
        <div className="card-left">
          <p className="lefts">Desert King</p>

          <p className="lefts">2345km away</p>
          <p className="lefts">
            <img src={star} />
            <img src={star} />
            <img src={star} />
            <img src={star} />
            <img src={star} />
          </p>
        </div>
        <div className="card-right">
          <p className="rights">
            <strong>1MBT per night</strong>
          </p>
          <p className="rights">available for 2weeks stay</p>
        </div>
      </div>
    </div>
  );
};
