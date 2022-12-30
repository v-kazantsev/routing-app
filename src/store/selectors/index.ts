import { OrdersSliceState } from 'store/slices/ordersSlice'
import { RouteSliceState } from 'store/slices/routeSlice'
import { SelectedOrderSliceState } from 'store/slices/selectedOrderSlice'

export const ordersSelector = (state: OrdersSliceState) => state.orders.orders

export const routeSelector = (state: RouteSliceState) => state.route.route

export const selectedOrderSelector = (state: SelectedOrderSliceState) => state.selectedOrder.selectedOrder