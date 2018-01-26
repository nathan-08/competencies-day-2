const initialState = {
    value: null
}

const SET_VALUE = 'SET_VALUE';

export function setValue(value){
    return{
        type: SET_VALUE,
        payload: value
    }
}

export default function reducer(state = initialState, action){
    switch (action.type) {
        case SET_VALUE:
            return Object.assign({}, state, {value: action.payload})
        default: 
            return state;
    }
}