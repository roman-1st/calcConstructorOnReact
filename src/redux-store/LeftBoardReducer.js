const TAKE_ITEM_FROM_LEFT_BOARD = 'TAKE_ITEM_FROM_LEFT_BOARD'
const LOCK_ITEM_ON_LEFT_BOARD = 'REMOVE_ITEM_FROM_LEFT_BOARD'

const initialState = {
  leftBoardItems: [
      {
        id: 1,
        value: "result",
        className: "result",
        items: [{ type: "span", id: 1, value: 0}],
      },
      {
        id: 2,
        value: "operand",
        className: "operand",
        items: [
          { type: "operand", id: 1, value: "/" },
          { type: "operand", id: 2, value: "x" },
          { type: "operand", id: 3, value: "-" },
          { type: "operand", id: 4, value: "+" },
        ],
      },
      {
        id: 3,
        value: "numbers",
        className: "numbers",
        items: [
          { type: "number", id: 7, value: 7, numText: "seven" },
          { type: "number", id: 8, value: 8, numText: "eight" },
          { type: "number", id: 9, value: 9, numText: "nine" },
          { type: "number", id: 4, value: 4, numText: "four" },
          { type: "number", id: 5, value: 5, numText: "five" },
          { type: "number", id: 6, value: 6, numText: "six" },
          { type: "number", id: 1, value: 1, numText: "one" },
          { type: "number", id: 2, value: 2, numText: "two" },
          { type: "number", id: 3, value: 3, numText: "three" },
          { type: "number", id: 10, value: 0, numText: "zero" },
          { type: "number", id: 11, value: ".", numText: "comma" },
        ],
      },
      {
        id: 4,
        value: "total",
        className: "total",
        items: [{ type: "total", id: 1, value: "=" }],
      },
  ],
  takenItem: {},
  isDrag: false,
};

export const LeftBoardReducer = (state = initialState, action) => {
  switch (action.type) {
    case TAKE_ITEM_FROM_LEFT_BOARD:
    return { ...state,
      takenItem: action.payload,
      isDrag: true,
    };
    case LOCK_ITEM_ON_LEFT_BOARD:
    return {
      ...state,
      isDrag: false,
      takenItem: {}
    }
    default:
      return state;
  }
};


export const takeItemFromLeftBoard = (payload) => ({ type: TAKE_ITEM_FROM_LEFT_BOARD, payload});
export const lockItemFromLeftBoard = () => ({ type: LOCK_ITEM_ON_LEFT_BOARD})

