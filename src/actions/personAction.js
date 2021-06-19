import { api } from "../api/api";
import authHeader from "../api/authHeader";
import { PERSON_LIST } from "./types";

export const getPersons = () => dispatch => {

    api.get('/persons/', { headers: authHeader() }).then(response => {
        console.log(response)

        if (response.status == 200) {
            dispatch({
                type: PERSON_LIST,
                payload: {
                    data: response.data
                }
            })
        }
    }).catch(error => {
        console.log(error.request)
    })
}