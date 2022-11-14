import pic from "./sample.svg";
import heart from "./heart.svg";
export const Card = () => {
  return (
    <div className="sample-card">
      <img src={pic} />
      <img className="heart" src={heart} />
      <div className="bottom-half">
        <div className="card-left">
          <p>Desert King</p>

          <p>2345km away</p>
          <p>stars</p>
        </div>
        <div className="card-right">
          <p className="rights">1mbt per night</p>
          <p className="rights">available for 2weeks stay</p>
        </div>
      </div>
    </div>
  );
};
