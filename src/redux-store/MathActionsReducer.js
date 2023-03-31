const SET_FIRST_NUMBER = "SET_FIRST_NUMBER"
const SET_SECOND_NUMBER = "SET_SECOND_NUMBER"
const SET_COMMA_NUMBER = "SET_COMMA_NUMBER"
const SET_OPERAND = "SET_OPERAND"
const SET_TOTAL = "SET_TOTAL"

const initialState = {
    firstNumber: '',
    secondNumber: '', 
    inputNumber: '0', //введенное число пользователем
    operand: "",
}

export const MathActionsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FIRST_NUMBER:
            return {
                ...state,
                inputNumber: Number(state.inputNumber + `${action.payload}`) , 
                firstNumber: Number(state.inputNumber + `${action.payload}`),
            }

        case SET_SECOND_NUMBER:
            if (state.firstNumber === state.inputNumber) {      // проверка на первый символ
                return {
                    ...state,
                    inputNumber: Number(action.payload),
                    secondNumber: Number(action.payload),
                }
            }
            return {                                                // добавление второго числа
                ...state,
                inputNumber: Number(state.inputNumber + `${action.payload}`) , 
                secondNumber: Number(state.inputNumber + `${action.payload}`) ,  
            }

        case SET_COMMA_NUMBER:                                      // добавление запятой после целого числа
            return {    
                ...state,
                inputNumber: state.inputNumber + `${action.payload}`
            }
        
        case SET_OPERAND:                                               // определение математического оператора
            if(state.secondNumber === '') {                             // первоначальная запись математического оператора
                return {
                    ...state,
                    operand: `${action.payload}`,
                }
            }
            if(state.firstNumber !== '' && state.secondNumber !== '') {  // математические действия с ранее указанным оператором с перезаписью оператора(по аналогии калькулятора на iphone)
                switch(state.operand) {
                    case "+":
                    return {
                        ...state,
                        firstNumber: state.firstNumber + state.secondNumber,
                        inputNumber: state.firstNumber + state.secondNumber,
                        secondNumber: '',
                        operand: `${action.payload}`,
                    }

                    case "-":
                    return {
                        ...state,
                        firstNumber: state.firstNumber - state.secondNumber,
                        inputNumber: state.firstNumber - state.secondNumber,
                        secondNumber: '',
                        operand: `${action.payload}`,
                    }

                    case "x":
                    return {
                        ...state,
                        firstNumber: state.firstNumber * state.secondNumber,
                        inputNumber: state.firstNumber * state.secondNumber,
                        secondNumber: '',
                        operand: `${action.payload}`,
                    }

                    case "/":
                    return {
                        ...state,
                        firstNumber: state.firstNumber / state.secondNumber,
                        inputNumber: state.firstNumber / state.secondNumber,
                        secondNumber: '',
                        operand: `${action.payload}`,
                    }
                }
            }
            return {
                ...state,
            }

        case SET_TOTAL:                                            // математические действия с указанным ранее оператором без перезаписи математического оператора
            switch(state.operand) {
                case "+":
                return {
                    ...state,
                    firstNumber: state.firstNumber + state.secondNumber,
                    inputNumber: state.firstNumber + state.secondNumber,
                    secondNumber: '',
                    operand: `${state.operand}`,
                }

                case "-":
                return {
                    ...state,
                    firstNumber: state.firstNumber - state.secondNumber,
                    inputNumber: state.firstNumber - state.secondNumber,
                    secondNumber: '',
                    operand: `${state.operand}`,
                }

                case "x":
                return {
                    ...state,
                    firstNumber: state.firstNumber * state.secondNumber,
                    inputNumber: state.firstNumber * state.secondNumber,
                    secondNumber: '',
                    operand: `${state.operand}`,
                }

                case "/":
                return {
                    ...state,
                    firstNumber: state.firstNumber / state.secondNumber,
                    inputNumber: state.firstNumber / state.secondNumber,
                    secondNumber: '',
                    operand: `${state.operand}`,
                }
            }

        default:
        return state
    }
}

export const setFirstNumber = (payload) => ({type: SET_FIRST_NUMBER, payload})
export const setSecondNumber = (payload) => ({type: SET_SECOND_NUMBER, payload})
export const setComma = (payload) => ({type: SET_COMMA_NUMBER, payload})
export const setOperand = (payload) => ({type: SET_OPERAND, payload})
export const setTotal = () => ({type: SET_TOTAL})