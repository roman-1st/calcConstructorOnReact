import React from "react";
import { useSelector } from "react-redux";

import './SwitchModeElement.css'

let SwitchModeElement = () => {

    const state = useSelector(state => state.RightBoardReducer)

    return (
        <div className="SwitchModeElement">
            {/* <button>Можно использовать</button>
            <button>Нельзя использовать </button> */}
        </div>
    )
}

export default SwitchModeElement