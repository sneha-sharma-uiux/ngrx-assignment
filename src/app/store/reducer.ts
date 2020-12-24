import { ActionsUnion, ActionTypes } from './actions';

export const initialState = {
  items: []
};

export function reducer(state = initialState, action: ActionsUnion) {
  console.log(action);
  switch (action.type) {
    case ActionTypes.LoadSuccess:
      return {
        ...state,
        items: [...action.payload]
      };

    default:
      return state;
  }
}
