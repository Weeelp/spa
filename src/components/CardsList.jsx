import React from "react";
import CardItem from "./CardItem";

const ProudctsList = (props) => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{props.title}</h1>
      <div
        style={{
          display: "grid",

          gap: "15px",
          gridTemplateColumns: "1fr 1fr ",
          gridTemplateRows: "auto",
        }}
      >
        {props.cards.map((card, index) => {
          return (
            <div key={index}>
              <CardItem number={index + 1} card={card}></CardItem>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProudctsList;
