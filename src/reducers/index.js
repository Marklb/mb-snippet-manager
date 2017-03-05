import { combineReducers } from 'redux'
import gists from './gists'
import visibilityFilter from './visibilityFilter'
import githubAuth from './githubAuth'

const gistsApp = combineReducers({
  gists,
  visibilityFilter,
  githubAuth
})

export default gistsApp
