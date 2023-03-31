import React                            from "react";
import { useDispatch, useSelector }     from "react-redux";
import { 
    setFirstNumber, 
    setSecondNumber, 
    setComma, 
    setOperand, 
    setTotal 
}                                       from "../../../redux-store/MathActionsReducer";

import './RightBoardItem.css'

let RightBoardItem = (props) => {
    let item = props.item
    const mathState = useSelector (state => state.MathActionsReducer)
    const dispatch = useDispatch()

    let getNumber = (value) => {
        if(value === '.') {
            dispatch(setComma(value))
        } else {
            mathState.operand === ''
            ? dispatch(setFirstNumber(value))
            : dispatch(setSecondNumber(value))
        }
    }

    // Drag and Drop функции

    //   let dragStart = (e, item) => {
    //     dispatch(takeItemFromLeftBoard(item));
    // };

    // let dragOver = (e, ) => {
    //     // над блоком
    //     e.preventDefault();
    // };

    // let dragLeave = (e) => {};

    // let dragEnd = (e, ) => {
    //   // console.log(e);
    //   if (state.isDrag === false) {
    //     console.log(e);
    //     e.target.draggable = false;
    //     e.target.style.opacity = "0.5";
    //   }
    //   };
  
    // let onDropHandler = (e) => {
    //   // console.log(item);
    //   e.preventDefault();
    // };
    // let getNumber = (value) => {
    //     dispatch(inputNumbers(value))
    // }

    // let getOperand = (value) => {
    //     // if(value === "+") dispatch( numberAddition() )
    //     dispatch(inputOperand(value))
    // }
    // console.log(item);
    
    
    return (
        <div 
        key={item.id}
        className={item.className}>
            {item.items.map ( (i) => {
                switch(i.type) {
                    case "span":
                    return (
                        <p key={i.id}> 
                            {mathState.inputNumber} 
                        </p>
                    )
                    case "operand":
                    return (
                        <p onClick={ () => dispatch(setOperand(i.value))} key={i.id}> 
                            {i.value}
                        </p>
                    )
                    case "number":
                    return (
                        <p onClick={ () => getNumber(i.value) } key={i.id}> 
                            {i.value}
                        </p>
                    )
                    case "total":
                    return (
                        <p onClick={ () => dispatch(setTotal())} key={i.id}> 
                            {i.value}
                        </p>
                    )
                }   
            })}
        </div>
    )
}

export default RightBoardItem