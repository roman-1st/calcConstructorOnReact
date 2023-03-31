const DROP_ITEM_ON_RIGHT_BOARD = 'DROP_ITEM_ON_RIGHT_BOARD'
const CHANGE_POSITION_ITEM_ON_RIGHT_BOARD = 'CHANGE_POSITION_ITEM_ON_RIGHT_BOARD'

const initialState = {
  rightBoardItems: [],
  takenItem: {},
  isDrag: false,
  switchMode: true,
};

export const RightBoardReducer = (state = initialState, action) => {
  switch (action.type) {

    case DROP_ITEM_ON_RIGHT_BOARD: 
      if (state.rightBoardItems.length === 0) {
        return {
          ...state,
          isDrag: false,
          rightBoardItems: [...state.rightBoardItems, action.payload],
        };
      }
      let item = state.rightBoardItems.find((el) => el === action.payload); 
      if (item !== action.payload) {
        return {
          ...state,
          isDrag: false,
          rightBoardItems: [...state.rightBoardItems, action.payload],
        };
      } else console.log('sdfsdf');
      return {
        ...state,
      };

    case CHANGE_POSITION_ITEM_ON_RIGHT_BOARD: // изменение порядка расположения блока на доске
      return {
        ...state,
      };

    default:
      return state;
  }
};

export const dropItemOnRightBoard = (payload) => ({ type: DROP_ITEM_ON_RIGHT_BOARD, payload });

