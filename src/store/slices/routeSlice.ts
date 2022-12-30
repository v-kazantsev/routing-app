import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type RouteState = {
  route: Waypoints
}

export interface RouteSliceState {
  route: RouteState
}

const initialState: RouteState = {
  route: [] as Waypoints
}

const routeSlice = createSlice({
  name: 'route',
  initialState,
  reducers: {
    routeCreated(state, action: PayloadAction<Waypoints>) {
      state.route = action.payload
    }
  }
})

export const { routeCreated } = routeSlice.actions
export const reducer = routeSlice.reducer