import { CLEAR_GISTS, ADD_GIST } from '../actions/gistsActions'
import { REHYDRATE } from 'redux-persist/constants'

const initialState = {
  id: null,
  data: null,
};

const gist = (state = initialState, action) => {
  switch (action.type) {
    case ADD_GIST:
      return {
        id: action.id,
        data: action.data
      }
    // case 'REMOVE_GIST':
    //   return state.filter(actionId => action.id !== actionId);
    // case 'TOGGLE_GIST':
    //   if (state.id !== action.id) {
    //     return state
    //   }

    //   return Object.assign({}, state, {
    //     completed: !state.completed
    //   })

    default:
      return state
  }
}

const gists = (state = [], action) => {
  switch (action.type) {
    case REHYDRATE:
      const incoming = action.payload.gists
      if (incoming) {
        let newState = [...state];
        for(let i = 0; i < incoming.length; i++){
          newState.push(gist(initialState, {
            type: ADD_GIST,
            ...incoming[i]
          }));
        }
        return newState;
      }
      return state
    case CLEAR_GISTS:
      return [];
    case ADD_GIST:
      return [
        ...state,
        gist(initialState, action)
      ]
    // case 'REMOVE_GIST':
    // case 'TOGGLE_GIST':
    //   return state.map(t =>
    //     gist(t, action)
    //   )
    default:
      return state
  }
}

export default gists
