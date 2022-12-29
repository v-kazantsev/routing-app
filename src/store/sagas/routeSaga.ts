// @ts-nocheck
import { call, put, take } from '@redux-saga/core/effects'
import { routeCreated } from '../slices/routeSlice'
import fetchRoute from 'api/fetchRoute'


function* findRoute(payload) {
  const { startCoordinates, endCoordinates } = payload
  try {
    const data = yield call(fetchRoute, {startCoordinates, endCoordinates})
    yield put(routeCreated(data))
  } catch(error) {
    console.log(error)
  }
}

export default function* watchOrderSelected() {
  while(true) {
    const { payload } = yield take('selectedOrder/selectOrder')
    yield call(findRoute, payload)
  }
}

