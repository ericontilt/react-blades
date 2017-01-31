import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const middleware = process.env.NODE_ENV !== 'production' ?
  [require('redux-immutable-state-invariant')(), thunk] :
  [thunk];

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middleware)
  );
}
