//userStore.js
import { createStore, combineReducers } from 'redux';
import userReducer from './reducer'; // Adjust the import path
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
  user: userReducer,
  // Add other reducers here if needed
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user'], // Specify which reducer to persist (in this case, 'user')
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer);

export const persistor = persistStore(store);

export default store;
