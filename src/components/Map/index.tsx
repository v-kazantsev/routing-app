import { useSelector } from 'react-redux'

const Map = () => {
  const { selectedOrder }: any = useSelector((state: {selectedOrder: IOrder}) => state.selectedOrder)
  const { startCoordinates, endCoordinates }  = selectedOrder
  if (Object.keys(startCoordinates).length === 0 || Object.keys(endCoordinates).length === 0) { return null }
  return (
    <>
    <div>Start Lat: {startCoordinates.lat}</div>
    <div>Start Long: {startCoordinates.long}</div>
    <div>End Lat: {endCoordinates.lat}</div>
    <div>End Long: {endCoordinates.long}</div>
   </>
  )
}

export default Map