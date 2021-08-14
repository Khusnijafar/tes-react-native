import {GET_USER} from '../types';

const initialState = {
  getUserData: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        getUserData: action.payload,
      };
    default:
      return state;
  }
};
