import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface ModalStripProp{
  modalType: string | null;
  message: string | null;
}

const initialState: ModalStripProp = {
  modalType: null,
  message: null,
}

const slice = createSlice({
  name: "modalStripReducer",
  initialState: initialState,
  reducers: {
    openModal: (state,action:PayloadAction<ModalStripProp>)=>{
      state.modalType = action.payload.modalType;
      state.message = action.payload.message;
    },
    closeModal: (state)=>{
      state.modalType = null;
      state.message = null;
    }
  },
});

export const { openModal, closeModal } = slice.actions;

export default slice.reducer;