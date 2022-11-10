// const initialState = {
//     counter: 0,
// }

// const reducer = (state=initialState, {type,payload}) => {
//     switch (type) {
//         case "INCREMENT":
//         return{counter:state.counter+1}
            
//             case "DECREMENT":
//                 return{counter:state.counter-1}
           
//             case "CLEAR":
//             return initialState;
               
//         default:
//             return state;
//     }
// }
// export default reducer

import {legacy_createStore as createStore ,combineReducers} from "redux"
import counterReducer from "./reducers/counterReducer"
import todoReducer from "./reducers/todoReducer"

const rootReducer = combineReducers({
    count: counterReducer,
    todo:todoReducer,
})

export  const store=createStore(rootReducer)