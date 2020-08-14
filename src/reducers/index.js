import { combineReducers } from 'redux'
import basketReducer from './basketReducer'
import mobileReducer from './mobileReducer'

export default combineReducers({
    basketState : basketReducer,
    mobileState: mobileReducer
})
