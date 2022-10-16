import { AnyAction } from "redux";
import { SET_LOADING } from "../actions/type"
import { fromJS, setIn, getIn } from 'immutable';

const initialState = fromJS({
  loading: false,
 })

export const uiReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case SET_LOADING:
      // return { ...state, loading: action.payload }
      return setIn(state, ['loading'], action.payload);
    default:
      return state;
  }
}

export const selectLoading = (state: { loading: boolean }) => getIn(state, ['ui', 'loading']);
