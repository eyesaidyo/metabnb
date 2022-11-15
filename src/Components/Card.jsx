import pic from "./sample.svg";
import heart from "./heart.svg";
export const Card = () => {
  return (
    <div className="sample-card">
      {/* <div className="pic-div"> */}
      <img className="pic" src={pic} />
      <img className="heart" src={heart} />
      {/* </div> */}
      <div className="bottom-half">
        <div className="card-left">
          <p className="lefts">Desert King</p>

          <p className="lefts">2345km away</p>
          <p className="lefts">stars</p>
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
