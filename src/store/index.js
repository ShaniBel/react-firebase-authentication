import {createStore,compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'
import { routerMiddleware } from 'react-router-redux';
import history from '../history';
import {isLoggedIn} from '../actions/authActions'

const middleware = [thunk, routerMiddleware(history)];
const initialState = {};

const store = createStore(rootReducer, initialState, 
    compose(
    applyMiddleware(...middleware)
    )
)


store.dispatch(isLoggedIn());


export default store;
