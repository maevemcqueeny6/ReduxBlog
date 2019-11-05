import { FETCH_POST, NEW_POST, FETCH_POSTS } from './types';

// thunk middleware allows us to call the disapatch function directly so that we can make asynchronous requests 

export function fetchPosts(){
    // dispatch is a resolver and a promise
    return function(dispatch){
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        // we tryna dispatch the state to the reducer
        .then(posts => dispatch({
            type: FETCH_POSTS,
            payload: posts
        }))
    }

}