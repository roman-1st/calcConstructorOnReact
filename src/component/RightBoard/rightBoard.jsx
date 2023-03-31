import React                                from "react";
import { useDispatch, useSelector }         from "react-redux";
import { lockItemFromLeftBoard }            from "../../redux-store/LeftBoardReducer";
import { dropItemOnRightBoard }             from "../../redux-store/RightBoardReducer";

import RightBoardItem                       from "./RightBoardItem/RightBoardItem";
import RightBoardWithoutItems               from "./RightBoardWithoutItems/RightBoardWithoutItems";

import "./rightBoard.css";

let RightBoard = () => {
    const state = useSelector(state => state.RightBoardReducer.rightBoardItems)
    const takenItemFromLeftBoard= useSelector(state => state.LeftBoardReducer.takenItem)
    const mathState = useSelector(state => state.MathActionsReducer)
    const dispatch = useDispatch()

    // Drag and Drop для правой доски
    let dropOnRightBoard = (e) => {
        e.preventDefault();
        dispatch(lockItemFromLeftBoard())
        dispatch(dropItemOnRightBoard(takenItemFromLeftBoard));
    };

    let dragOverOnRightBoard = (e) => {
        e.preventDefault();
    };
    // ////////////////////////////////////

    //Drag and Drop для элемента доски

    // let dragStartItem = (e, item) => {

    // }
    // let dragLeaveItem = (e) => {
    //     e.target.style.boxShadow = 'none'
    // }
    // let dragOverItem = (e) => {
    //     e.preventDefault()
    //     console.log(e);
    //     if (e.target.className == 'item') {
    //         e.target.style.boxShadow = '0 3px 100px red'
    //     }
    // }
    // let dragEnd = (e, ) => {
    //     e.target.style.boxShadow = 'none'
    // }
    // let dropItem = (e, item) => {
    //     e.preventDefault()
    // }

    let item = state.map( (i) => {
        return (
            <div 
            // draggable={true}
            // onDragStart={(e) => dragStartItem(e, item)}
            // onDragLeave={(e) => dragLeaveItem(e)}
            // onDragOver={(e) => dragOverItem(e)}
            // onDragEnd={(e) => dragEnd(e)}
            // onDrop={ (e) => dropItem(e, item)}

            key={i.id} 
            className="item">
                <RightBoardItem item={i}/>
            </div>
        )
    })
    return (
        <div 
        // draggable={true}
        onDragOver={ (e) => dragOverOnRightBoard(e)}
        onDrop={(e) => dropOnRightBoard(e)}
        className="rightBoard"
        >
            { 
                state.length === 0 
                    ? <RightBoardWithoutItems /> 
                    : item
            }
        </div>
    );

};

export default RightBoard;

