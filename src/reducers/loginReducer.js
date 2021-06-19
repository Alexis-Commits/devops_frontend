import { LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT } from "../actions/types"

const INIT_STATE = {
    token: JSON.parse(localStorage.getItem('token')),
    error: null
}

const loginReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return { ...state, token: action.payload.token, error: null }
        case LOGIN_FAILURE:
            return { ...state, token: null, error: true }
        case LOGOUT:
            return { ...state, token: action.payload.token }
        default:
            return state
    }
}
export default loginReducer