import { FETCH_POSTS, NEW_POST } from '../actions/types';

const initialState = {
    // posts that come in from action
    items: [],
    // represents the single post that we add 
    item: {}
}

// evaluates which type we're dealing with
// action has to include a type, which is what were evaluating 
export default function (state = initialState, action) {
    switch(action.type){
        case FETCH_POSTS:
            return {
                ...state,
                // called it payload in the postACtions 
                items: action.payload
            }
        case NEW_POST:
                return {
                    ...state,
                    // called it payload in the postACtions 
                    item: action.payload
                }
        default:
            return state; 
    }
}