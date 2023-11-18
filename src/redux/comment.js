import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: 'default',
};

export const commentSlice = createSlice({
    name: 'comment',
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.user = action.payload;
        },
    }
})

export const { addUser } = commentSlice.actions
export default commentSlice.reducer;