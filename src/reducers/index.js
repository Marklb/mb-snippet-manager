import { combineReducers } from 'redux'
import gists from './gists'
import visibilityFilter from './visibilityFilter'
import githubAuth from './githubAuth'
import selectedGist from './selectedGist'

const gistsApp = combineReducers({
  gists,
  visibilityFilter,
  githubAuth,
  selectedGist
})

export default gistsApp
