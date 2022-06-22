import { combineReducers, configureStore } from "@reduxjs/toolkit"
import usersSlice from "./users/users.slice"
import newsSlice  from './news/news.slice';

export const rootReducer = combineReducers({
    user: usersSlice,
    news: newsSlice
})

export const store = configureStore({
    reducer: rootReducer,
});
