import { PERSON_LIST } from "../actions/types";

const INIT_STATE = {

}

const personReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case PERSON_LIST:
            return { ...state, persons: action.payload.data }
        default:
            return state
    }
}


export default personReducer