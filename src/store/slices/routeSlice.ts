import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const routeSlice = createSlice({
  name: 'route',
  initialState: {
    route: {}
  },
  reducers: {
    routeCreated(state, action) {
      state.route = action.payload
    }
  }
})

export const { routeCreated } = routeSlice.actions
export const reducer = routeSlice.reducer