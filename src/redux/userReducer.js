import axios from 'axios'; 

const intialState = {
    email: null, 
    firstName: null, 
    lastName: null 
};

// Action Types 
const REQUEST_USER_DATA = 'REQUEST_USER_DATA'; 

// Action Builder 
export function requestUserData() {
    const data = axios.get('/auth/user-data')
        .then(res => res.data)

        return {
            type: REQUEST_USER_DATA, 
            payload: data 
        }
}

export default function reducer(state = intialState, action) {
    switch(action.type) {
        case REQUEST_USER_DATA + '_FULFILLED':
            const { email, firstName, lastName } = action.payload.user; 
            return { email, firstName, lastName }; 
        default:
            return state
    }
};