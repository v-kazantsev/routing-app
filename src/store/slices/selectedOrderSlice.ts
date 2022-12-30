import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type OrderState = {
  selectedOrder: IOrder
}

export interface SelectedOrderSliceState {
  selectedOrder: OrderState
}

const initialState: OrderState = {
  selectedOrder: {} as IOrder
}

const selectedOrderSlice = createSlice({
  name: 'selectedOrder',
  initialState,
  reducers: {
    selectOrder(state, action: PayloadAction<IOrder>) {
      state.selectedOrder = action.payload
    }
  }
})

export const { selectOrder } = selectedOrderSlice.actions
export const reducer = selectedOrderSlice.reducer