
import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk'; // Correct named import
import rootReducer from './reducers';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk) // Apply middleware
);

export default store;
