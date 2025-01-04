import React from "react";
import MyButton from "./UI/MyButton/MyButton";
import heartIMG from "../img/free-icon-heart-1077035.png";

const CardItem = (props) => {
  return (
    <div className="card__item">
      <div className="card__content">
        <strong>
          {props.number}. {props.card.title}
        </strong>
        <div>{props.card.body}</div>
      </div>
      <MyButton style={{ borderRadius: "100% " }}>
        <img src={heartIMG} style={{}} alt="Like" />
      </MyButton>
    </div>
  );
};

export default CardItem;
