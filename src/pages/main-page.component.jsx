import React from "react";
import "./main-page.styles.scss";
import Card from "../components/card/card-component";
import { FOOD_DATA } from "../data/cats-food-data";

const MainPage = () => {
  return (
    <div className="main-page">
      <h2 className="page-title">Ты сегодня покормил кота?</h2>
      <div className="cards-container">
        {FOOD_DATA.map((item) => (
          <Card
            key={item.id}
            topText={item.upperTitle}
            title={item.title}
            flavour={item.flavour}
            portions={item.portions}
            gift={item.gift}
            satisfaction={item.satisfaction}
            weight={item.weight}
            availability={item.availability}
            additionalInfo={item.additionalInfo}
          />
        ))}
      </div>
    </div>
  );
};

export default MainPage;
