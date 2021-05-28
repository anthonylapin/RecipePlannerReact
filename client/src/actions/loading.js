import { actionTypes } from "../constants";

export const loadingAction = (payload) => ({
  type: actionTypes.LOADING,
  payload,
});
