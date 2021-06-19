import { api } from "../api/api"
import { LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT } from "./types"


export const login = (username, password) => dispatch => {
    api.post('/rest-auth/', { username, password }).then(response => {

        console.log(response)
        localStorage.setItem('token', JSON.stringify(response.data.token))

        dispatch({
            type: LOGIN_SUCCESS,
            payload: {
                token: response.data.token
            }
        })

    }).catch(error => {
        console.log(error.request)

        dispatch({
            type: LOGIN_FAILURE,
        })
    })
}

export const logout = () => dispatch => {
    dispatch({
        type: LOGOUT
    })
}