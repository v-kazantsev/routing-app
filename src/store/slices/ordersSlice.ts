import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type OrdersState = {
  orders: IOrder[]
}

export interface OrdersSliceState {
  orders: OrdersState
}

const initialState: OrdersState = {
  orders: []
}

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    fetchData(state, action: PayloadAction<IOrder[]>) {
      state.orders = action.payload
    }
  }
})

export const { fetchData } = ordersSlice.actions
export const reducer = ordersSlice.reducer
