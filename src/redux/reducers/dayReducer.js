import { dayTypes } from "../types/dayTypes";

// const initialState = {
//     dayss: []
// }

export const dayReducer = (state = {}, action) => {
    switch (action.type){
        case dayTypes.DAY_SEND:
            return {
                ...state,
                ...action.payload,
            }
            default:
                return state;
    }
}