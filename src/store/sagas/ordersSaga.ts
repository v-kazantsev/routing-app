import { put } from '@redux-saga/core/effects'
import { fetchData } from 'store/slices/ordersSlice'

const orders = [
  {
    key: '1',
    number: '1',
    startCoordinates: {
      lat: 59.84660399,
      long: 30.29496392
    },
    endCoordinates: {
      lat: 59.82934196,
      long: 30.42423701
    }
  },
  {
    key: '2',
    number: '2',
    startCoordinates: {
      lat: 59.82934196,
      long: 30.42423701
    },
    endCoordinates: {
      lat: 59.82761295,
      long: 30.41705607
    }
  },
  {
    key: '3',
    number: '3',
    startCoordinates: {
      lat: 59.83567701,
      long: 30.38064206
    },
    endCoordinates: {
      lat: 59.84660399,
      long: 30.29496392,
    }
  },
  {
    key: '4',
    number: '4',
    startCoordinates: {
      lat: 59.84660399,
      long: 30.29496392
    },
    endCoordinates: {
      lat: 59.82761295,
      long: 30.41705607
    }
  },
  {
    key: '5',
    number: '5',
    startCoordinates: {
      lat: 59.83567701,
      long: 30.38064206
    },
    endCoordinates: {
      lat: 59.84660399,
      long: 30.29496392,
    }
  }
]

export default function* populateOrders() {
  yield put(fetchData(orders))
}