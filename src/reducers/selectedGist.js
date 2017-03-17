import { SET_SELECTED_GIST } from '../actions/selectedGistActions'
import { REHYDRATE } from 'redux-persist/constants'

const initialState = {
  id: null,
}

const selectedGist = (state = initialState, action) => {
  switch (action.type) {
    case REHYDRATE:
      console.log('REHYDRATE: selectedGist');
      const incoming = action.payload.selectedGist;
      if (incoming) return {
        ...state,
        ...incoming
      }
      return state
      
    case SET_SELECTED_GIST:
      return Object.assign({}, state, {
        id: action.id,
        data: action.data
      });


    default:
      return state
  }
}

export default selectedGist
