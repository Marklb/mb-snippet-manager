const gist = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_GIST':
      return {
        id: action.id,
        text: action.text,
        completed: false
      }
    case 'REMOVE_GIST':
      return state.filter(actionId => action.id !== actionId);
    case 'TOGGLE_GIST':
      if (state.id !== action.id) {
        return state
      }

      return Object.assign({}, state, {
        completed: !state.completed
      })

    default:
      return state
  }
}

const gists = (state = [], action) => {
  switch (action.type) {
    case 'ADD_GIST':
      return [
        ...state,
        gist(undefined, action)
      ]
    case 'REMOVE_GIST':
    case 'TOGGLE_GIST':
      return state.map(t =>
        gist(t, action)
      )
    default:
      return state
  }
}

export default gists
