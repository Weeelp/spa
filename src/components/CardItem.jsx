import React from "react";
import MyButton from "./UI/MyButton/MyButton";

const CardItem = (props) => {
  return (
    <div className="card__item">
      <div className="card__content">
        <strong>
          {props.number}. {props.card.title}
        </strong>
        <div>{props.card.body}</div>
      </div>
      <MyButton style={{ borderRadius: "100%" }}>♡</MyButton>
    </div>
  );
};

export default CardItem;
