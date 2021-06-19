import { combineReducers } from "redux"
import loginReducer from './loginReducer'
import personReducer from "./personReducer"

export default combineReducers({
    auth: loginReducer,
    persons: personReducer
})