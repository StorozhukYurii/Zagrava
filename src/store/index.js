import {configureStore, combineReducers} from '@reduxjs/toolkit';
import listings from './listingsSlice/listingsSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const persistConfig = {
  key: 'root',
  whitelist:['listings'],
  storage: AsyncStorage,
};

const rootReducer = combineReducers({listings});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  // devTools: process.env.NODE_ENV !== 'production',
});

export const persistor = persistStore(store);

export default store;
