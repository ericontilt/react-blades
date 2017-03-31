import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import immutableStateInvariant from 'redux-immutable-state-invariant';

const middleware = process.env.NODE_ENV !== 'production' ?
  [immutableStateInvariant(), thunk] :
  [thunk];

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middleware)
  );
}
