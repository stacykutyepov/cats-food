import React, { useState } from "react";
import "./card-component.styles.scss";
import catPicture from "../../assets/cat-photo.png";

const Card = ({
  topText,
  title,
  flavour,
  portions,
  gift,
  satisfaction,
  additionalInfo,
  weight,
  availability,
}) => {
  const [isSelected, setSelect] = useState(false);
  const [isMouseLeave, setMouseLeave] = useState(false);

  const onSetSelected = () => {
    if (availability) {
      setSelect(!isSelected);
      setMouseLeave(false);
    }
  };

  const onSetMouseLeave = () => {
    if (isSelected && !isMouseLeave) {
      setMouseLeave(true);
    }
  };

  return (
    <div className="card-one-container" onMouseLeave={onSetMouseLeave}>
      <div
        className={
          isSelected
            ? "border-pink"
            : availability
            ? "border-blue"
            : "border-grey"
        }
        onClick={onSetSelected}
      >
        <div className="card-container">
          <div
            className={`text-container ${availability ? "" : "not-available"}`}
          >
            <span
              className={`card-top-text ${
                isMouseLeave && isSelected ? "text-pink" : ""
              }`}
            >
              {isMouseLeave && isSelected ? "Котэ не одобряет?" : topText}
            </span>
            <span className="card-title">{title}</span>
            <span className="card-taste">{flavour}</span>
            <span className="card-description">{portions} порций</span>
            <span className="card-description">{gift}</span>
            <span className="card-description">{satisfaction}</span>
          </div>
          <div
            className={`image-container ${availability ? "" : "not-available"}`}
          >
            <img
              className="image-cat"
              src={catPicture}
              alt="cat with orange eyes"
            />
          </div>
        </div>
      </div>
      <div
        className={`oval ${availability ? "blue" : "not-available grey"} ${
          isSelected ? "pink" : ""
        }`}
      >
        <span className="weight-number">{weight}</span>
        <span className="weight">kg</span>
      </div>
      {availability ? (
        isSelected ? (
          <span className="action-text">{additionalInfo}</span>
        ) : (
          <span className="action-text">
            Чего сидишь? Порадуй котэ,
            <span className="buy-action" onClick={onSetSelected}>
              купи.
            </span>
          </span>
        )
      ) : (
        <span className="action-finished">Печалька, {flavour} закончился.</span>
      )}
    </div>
  );
};

export default Card;
