import React            from "react";
import pic              from './loadPic.svg'

import "./RightBoardWithoutItems.css";

let RightBoardWithoutItems = () => {
  return (
    <div className="BlockWithoutItems">
      <img src={pic} />
      <h5>Перетащите сюда</h5>
      <p>любой элемент из левой колонки</p>
    </div>
  );
};

export default RightBoardWithoutItems