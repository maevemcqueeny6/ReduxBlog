import {createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};

// thunk is the middleware 
const middleware = [thunk];

const store = createStore(rootReducer, initialState, applyMiddleware(...middleware));

// applyimddleware in an enhancer

export default store;