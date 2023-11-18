import { createSlice } from '@reduxjs/toolkit';


export const showSlice = createSlice({
    name: 'show',
    initialState: {
        see: false,
        reportshow: false
    },
    reducers: {
        showComment: (state) => {
            state.see = !state.see;
        },
        showReport: (state) => {
            state.reportshow = !state.reportshow;
        }
    }
})

export const { showComment, showReport } = showSlice.actions;
export default showSlice.reducer;