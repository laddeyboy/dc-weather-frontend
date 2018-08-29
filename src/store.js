import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import weather from './reducers';

var store = createStore(weather, applyMiddleware(thunk));

export default store;
