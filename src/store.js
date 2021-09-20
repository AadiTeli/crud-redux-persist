
import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './rootReducer'

// To Store Redux data, Withount Local Storage, The Method use is called "persistReducer"

// BlackList -- If we've any User, That we want to block them to use page/website. BL used
// WhiteList -- The added user will be able to access the page/website.

const persistConfig = {
    key: 'root',
    storage,
}
const persistedReducer = persistReducer(persistConfig, rootReducer)


const store = createStore(persistedReducer);


export const persistor = persistStore(store);

export default store;