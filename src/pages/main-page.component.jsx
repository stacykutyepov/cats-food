import React from "react";
import "./main-page.styles.scss";
import Card from '../components/card/card-component';

const MainPage = () => {
  return (
    <div className="main-page">
      <span className="page-title">Ты сегодня покормил кота?</span>
      <div className="cards-container">
      <Card/>
      <Card/>
      <Card/>


      </div>
    </div>
  );
};

export default MainPage;
