import {configureStore} from '@reduxjs/toolkit'
import listings from './listingsSlice/listingsSlice'
// import AsyncStorage  from '@react-native-async-storage/async-storage'

// const persistConfig = {
//     key: 'root',
//     storage:AsyncStorage,
//   }


export const store = configureStore({
    reducer:{
        listings
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== 'production',
})

