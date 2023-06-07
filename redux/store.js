import { combineReducers, configureStore, } from "@reduxjs/toolkit";
import authReducer from "./slice/authSlice";
import authSlice1 from "./slice/authSlice1";

// const rootReducer =combineReducers({
// auth: authReducer
// })

const rootReducer = combineReducers({
    auth: authReducer,
    cart: authSlice1,

});
const store = configureStore({
    reducer: rootReducer,
    devTools: window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
})

export default store;