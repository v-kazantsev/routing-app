import { all } from '@redux-saga/core/effects'
import ordersSaga from './ordersSaga'

function* rootSaga() {
  yield all([
    ordersSaga()
  ])
}

export default rootSaga