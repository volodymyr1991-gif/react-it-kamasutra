import {combineReducers, createStore} from 'redux'
import profileReducer from './profile-reducer'
import dialogsReducer from './dialogs-reducer'
import sideBarReducer from './sidebar-reducer'

let reducers = combineReducers({
    profilePage: dialogsReducer,
    mesagesPage: profileReducer,
    sideBar: sideBarReducer,
})

let store = createStore(reducers)

export default store