import { useState } from 'react'
import { Table } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import { useDispatch, useSelector } from 'react-redux'
import { selectOrder } from 'store/slices/selectedOrderSlice'
import Map from '../Map'
import './style.css'

const Home = () => {

  const dispatch = useDispatch()
  const { orders: dataSource } = useSelector((state: any) => state.orders)
  
  const [selected, setSelected] = useState<number | undefined>()

  const columns: ColumnsType<IOrder> = [
    {
      title: 'Номер заявки',
      dataIndex: 'number',
      key: 'number',
      render: (number) => <span>{`№${number}`}</span>
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

  const onRow = (record: IOrder, rowIndex: number | undefined) => {
    return {
      onClick: () => {
        setSelected(rowIndex)
        dispatch(selectOrder(record))
      }
    }
  }

  if (dataSource.length === 0) return null
  return (
  <div className="home">
    <div className="home__table">
      <Table
        columns={columns}
        dataSource={dataSource}
        pagination={false}
        onRow={onRow}
        rowClassName={(_, index) => index === selected ? "home__table-row home__table-row_selected" : "home__table-row"}
      />
    </div>
    <div className="home__map"><Map /></div>
  </div>
)}

export default Home
