import { createStore, applyMiddleware } from 'redux';

import reducer from '../reducers';
const enchancer = applyMiddleware();
const store = createStore(reducer, {}, enchancer);
export default store;
