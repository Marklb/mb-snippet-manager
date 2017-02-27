import { combineReducers } from 'redux'
import gists from './gists'
import visibilityFilter from './visibilityFilter'

const gistsApp = combineReducers({
  gists,
  visibilityFilter
})

export default gistsApp
