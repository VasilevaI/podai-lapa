import {combineReducers} from "redux";
import types from "./action-types";

function animals(state=[], action){
    switch (action.type) {
        case types.ADD_ANIMAL: {
            return [...state, action.payload];
        }
        default:
            return state;
    }
}

export default combineReducers({
    animals,
});