import { createStore } from 'redux';
const defaultState = {
  loginState: false
};
function reducer(state = defaultState, action) {
  let {type, payload} = action;
  switch (type) {
    case 'UPDATE_LOGIN_STATE':
      let newState = {loginState: !state.loginState};
      return  {...state, ...newState};
    default:
      return state;
  }
}
const action = {
  type: 'ADD_TODO',
  payload: 'Learn Redux'
};

let store = createStore(reducer);
export default store;