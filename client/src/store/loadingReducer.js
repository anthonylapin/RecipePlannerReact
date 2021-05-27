import { actionTypes } from "../constants";

const defaultState = {
  isLoading: false,
};

export const loadingReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.LOADING:
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
};

export const loadingAction = (payload) => ({
  type: actionTypes.LOADING,
  payload,
});
