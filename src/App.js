import React from "react";
import './App.css';
import LeftBoard from "./component/LeftBoard/LeftBoard.jsx";
import RightBoard from "./component/RightBoard/rightBoard";
import SwitchModeElement from "./component/SwitchModeElement/SwitchModeElement";

function App() {
  return (
    <div className="App">
      <SwitchModeElement />
      <div className="boardsBlock">
        <LeftBoard />
        <RightBoard />
      </div>
    </div>
  );
}

export default App;
