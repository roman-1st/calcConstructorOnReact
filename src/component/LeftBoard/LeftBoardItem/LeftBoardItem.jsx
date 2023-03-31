import React from "react";

import './result.css'
import './numbers.css'
import './operand.css'
import './total.css'
import { useDispatch } from "react-redux";
import { getSetNum } from "../../../redux-store/MathActionsReducer";

let LeftBoardItem = (props) => {
    const dispatch = useDispatch()
    let item = props.item

    return (
        <div 
        key={item.id}
        className={item.className}>
            {item.items.map ( (i) => {
                
                if(i.type === 'span') return (
                    <p key={i.id}> 
                        {i.value} 
                    </p>
                )
                // onClick={ () => dispatch(getSetNum())}
                if(i.type === 'operand' || i.type === 'total' ) return (
                    <p  key={i.id}> 
                        {i.value}
                    </p>
                )

                return (
                    <p  key={i.id}> 
                        {i.value}
                    </p>
                )
            })}
        </div>
    )
}

export default LeftBoardItem