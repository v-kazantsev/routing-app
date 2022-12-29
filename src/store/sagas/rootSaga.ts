import { all } from '@redux-saga/core/effects'
import ordersSaga from './ordersSaga'
import routeSaga from './routeSaga'

function* rootSaga() {
  yield all([
    ordersSaga(),
    routeSaga()
  ])
}

export default rootSaga