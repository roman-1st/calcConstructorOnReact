import React                          from "react";
import { useDispatch, useSelector }   from "react-redux";
import { takeItemFromLeftBoard }      from "../../redux-store/LeftBoardReducer";
import LeftBoardItem                  from "./LeftBoardItem/LeftBoardItem.jsx";

import "./LeftBoard.css";

let LeftBoard = () => {
  let state = useSelector((state) => state.LeftBoardReducer);
  const dispatch = useDispatch();

  let dragStart = (e, item) => {
    dispatch(takeItemFromLeftBoard(item));
  };

  let dragEnd = (e, item, block) => {
    if (state.isDrag === false) {
      e.target.draggable = false;
      e.target.style.opacity = "0.5";
      e.target.style.pointerEvents = "none";
    }
  };

  return (
    <div className="leftBoard">
      {state.leftBoardItems.map((item) => (
        <div
          className="item"
          draggable={true}
          onDragStart={(e) => dragStart(e, item)}
          onDragEnd={(e) => dragEnd(e, item)}
          key={item.id}
        >
          <LeftBoardItem item={item} />
        </div>
      ))}
    </div>
  );
};

export default LeftBoard;
