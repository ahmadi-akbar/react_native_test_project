import {combineReducers} from 'redux';

const INITIAL_STATE = {};

const reducer = (state = INITIAL_STATE, action) => {
  const {type} = action;
  switch (type) {
    default:
      return state;
  }
};

export default combineReducers({
  store: reducer,
});
