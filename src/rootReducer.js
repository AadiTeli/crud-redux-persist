import { combineReducers } from 'redux'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import userReducer from './Components/userReducer'

const  persistConfig ={
    key:'root',
    storage,
    whitelist:['manager']
}

const rootReducer = combineReducers({
    user: userReducer,
})

export default persistReducer(persistConfig,rootReducer)