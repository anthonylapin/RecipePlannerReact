import {
  actionTypes,
  loadingReducerDefaultState as defaultState,
} from "../constants";

export const loadingReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.LOADING:
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
};
