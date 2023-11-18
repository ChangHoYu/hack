import { configureStore } from '@reduxjs/toolkit';
import commentReducer from './comment'
import showReducer from './show';

export const store = configureStore({
    reducer: {
        comment: commentReducer,
        show: showReducer,
    },
})