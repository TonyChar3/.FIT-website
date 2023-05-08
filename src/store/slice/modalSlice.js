import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isActive: false,
    message: ""
}

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        showModal: (state, action) => {
            if(action.payload){
                state.isActive = true
                state.message = action.payload
            }
        },
        closeModal: (state) => {
            state.isActive = false
            state.message = ""
        }
    }
})

export const { showModal, closeModal} = modalSlice.actions;
export default modalSlice.reducer;