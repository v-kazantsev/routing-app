import { call, put, takeLatest } from '@redux-saga/core/effects'
import { routeCreated } from '../slices/routeSlice'
import fetchRoute from 'api/fetchRoute'
import { selectOrder } from '../slices/selectedOrderSlice'
import { TakeableChannel } from '@redux-saga/core'

function* findRoute({ payload }: {payload: IOrder}): any {
  const { startCoordinates, endCoordinates } = payload
  try {
    const data = yield call(fetchRoute, {startCoordinates, endCoordinates})
    yield put(routeCreated(data))
  } catch(error) {
    console.log(error)
  }
}

export default function* watchOrderSelected() {
    yield takeLatest(selectOrder.type as unknown as TakeableChannel<unknown>, findRoute)
}

