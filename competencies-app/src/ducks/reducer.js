const axios = require('axios')
const initialState = {
    value: null,
    apicall: null
}

const SET_VALUE = 'SET_VALUE';
const GET_API = 'GET_API';

export function setValue(value){
    return{
        type: SET_VALUE,
        payload: value
    }
}
export function callApi(){
    return{
        type: GET_API,
        payload: axios.get('https://swapi.co/api/people/1')
    }
}

export default function reducer(state = initialState, action){
    switch (action.type) {
        case SET_VALUE:
            return Object.assign({}, state, {value: action.payload})
        case GET_API +'_PENDING':
            console.log('request pending . . . ')

            return Object.assign({}, state, {apicall: 'pending . . .'})
        case GET_API + '_FULFILLED':
            return Object.assign({}, state, {apicall: action.payload.name})
        default: 
            return state;
    }
}