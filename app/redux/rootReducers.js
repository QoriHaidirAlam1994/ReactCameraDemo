import { combineReducers } from 'redux'

import nav from './nav'
import cameraReducer from '../camera/reducers'


const appReducer = combineReducers({
  nav,
  cameraReducer
})

export default appReducer
