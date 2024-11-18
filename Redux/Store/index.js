// In "@/Redux/Store.js"
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import searchReducer from "@/Redux/Slices/Search";
import generalReducer from "@/Redux/Slices/General"

const persistConfig = {
    key: 'root',
    storage,
};

const rootReducer = combineReducers({
    search: searchReducer,
    general: generalReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer);


export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export const persistor = persistStore(store);