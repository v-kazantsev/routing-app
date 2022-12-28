import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const ordersSlice = createSlice({
  name: 'orders',
  initialState: {
    orders: [] as IOrder[]
  },
  reducers: {
    fetchData(state, action: PayloadAction<IOrder[]>) {
      state.orders = action.payload
    }
  }
})

export const { fetchData } = ordersSlice.actions
export const reducer = ordersSlice.reducer