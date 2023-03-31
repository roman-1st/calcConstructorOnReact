import { legacy_createStore, combineReducers }      from "redux";
import { RightBoardReducer }                        from "./RightBoardReducer";
import { LeftBoardReducer }                         from "./LeftBoardReducer";
import { MathActionsReducer }                       from "./MathActionsReducer";

const rootReducer = combineReducers({
    LeftBoardReducer: LeftBoardReducer,
    RightBoardReducer: RightBoardReducer,
    MathActionsReducer: MathActionsReducer,
})

const store = legacy_createStore(rootReducer)

export default store