let nextGistId = 0
export const addGist = (text) => {
  return {
    type: 'ADD_GIST',
    id: nextGistId++,
    text
  }
}

export const removeGist = (id) => {
  return {
    type: 'REMOVE_GIST',
    id
  }
}

export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const toggleGist = (id) => {
  return {
    type: 'TOGGLE_GIST',
    id
  }
}
