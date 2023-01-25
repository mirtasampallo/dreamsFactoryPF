import React from "react";
import Card from "../Card/Card";
import s from "./Cards.module.css";

const Cards = ({ currentProducts }) => {
  return (
    <div className={s.deck}>
      {currentProducts?.map((ev,i) => {
        return (
          <div key={i}>
            <Card              
              title={ev.title}
              img={ev.img}
              rating={ev.rating}
              price={ev.price}
              id={ev._id}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Cards;