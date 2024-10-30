import "./styles/menu-item.scss";
import solidStar from "../../images/solid-star.svg";
import blankStar from "../../images/blank-start.svg";
import { calculateRating } from "../../utils";
function MenuItem(props) {

  const rating = calculateRating(props.votes);

  return (
    <ul className="menu-item">
      <li>
        <img src={props.image} height="130" width="130" alt="Menu Image" />
        <div className="details">
          <div className="item-name">{props.name}</div>
          {props.label && <div className="label">{props.label}</div>}
          <div className="rating">
            {[...Array(5)].map((_, index) => (
              <img
                key={index}
                src={index < rating ? solidStar : blankStar}
                alt="*"
              />
            ))}
            <span className="votes">
              {props.votes} {props.votes >= 2 ? "votes" : "vote"}
            </span>
          </div>
          <div className="price">₹{props.price}</div>
          <div className="description">{props.details}</div>
        </div>
      </li>
    </ul>
  );
}
export default MenuItem;
