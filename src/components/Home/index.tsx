import { Table } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import { useDispatch} from 'react-redux'
import { selectOrder } from 'store/slices/selectedOrderSlice'
import Map from '../Map'
import './style.css'

const Home = () => {

  const dispatch = useDispatch()

  const dataSource: IOrder[] = [
    {
      key: '1',
      number: '№1',
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
      number: '№2',
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
      number: '№3',
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
      number: '№4',
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
      number: '№5',
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

  const columns: ColumnsType<IOrder> = [
    {
      title: 'Номер заявки',
      dataIndex: 'number',
      key: 'number'
    },
    {
      title: 'Координаты ОТ lat',
      dataIndex: 'startCoordinates',
      key: 'startLat',
      render: ( { lat }) => <span>{lat}</span>
    },
    {
      title: 'Координаты ОТ lng',
      dataIndex: 'startCoordinates',
      key: 'startLong',
      render: ( { long }) => <span>{long}</span>
    },
    {
      title: 'Координаты ДО lat',
      dataIndex: 'endCoordinates',
      key: 'endLat',
      render: ( { lat }) => <span>{lat}</span>
    },
    {
      title: 'Координаты ДО lng',
      dataIndex: 'endCoordinates',
      key: 'endLong',
      render: ( { long }) => <span>{long}</span>
    }
  ]

  const onRow = (record: IOrder) => {
    return {
      onClick: () => {
        dispatch(selectOrder(record))
      }
    }
  }

  return (
  <div className="home">
    <div className="home__table">
      <Table columns={columns} dataSource={dataSource} pagination={false} onRow={onRow} />
    </div>
    <div className="home__map"><Map /></div>
  </div>
)}

export default Home
