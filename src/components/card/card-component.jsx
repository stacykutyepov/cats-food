import React from "react";
import "./card-component.styles.scss";
import catPicture from "../../assets/cat-photo.png";

const Card = () => {
  return (
    <div className="card-one-container">
      <div className="border-blue">
        <div className="card-container">
          <div className="text-container">
            <span className="card-top-text">Сказочное заморское яство</span>
            <span className="card-title">Title</span>
            <span className="card-taste">Title</span>
            <span className="card-description">Description</span>
            <span className="card-description">Description</span>
            <span className="card-description">Description</span>
          </div>
          <div className="image-container">
            <img
              className="image-cat"
              src={catPicture}
              alt="cat with orange eyes"
            />
          </div>
        </div>
      </div>
      <div className="oval">
        <span className="weight-number">0,5</span>
        <span className="weight">kg</span>
      </div>
      <span className="action-text">
        Чего сидишь? Порадуй котэ, <span className="buy-action">купи.</span>
      </span>
    </div>
  );
};

export default Card;
