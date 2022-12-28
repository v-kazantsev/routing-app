import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const selectedOrderSlice = createSlice({
  name: 'selectedOrder',
  initialState: {
    selectedOrder: {} as IOrder
  },
  reducers: {
    selectOrder(state, action: PayloadAction<IOrder>) {
      state.selectedOrder = action.payload
    }
  }
})

export const { selectOrder } = selectedOrderSlice.actions
export const reducer = selectedOrderSlice.reducer