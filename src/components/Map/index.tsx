import { useSelector } from 'react-redux'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import './style.css'

const Map = () => {
  // const { selectedOrder }: any = useSelector((state: {selectedOrder: IOrder}) => state.selectedOrder)
  // const { startCoordinates, endCoordinates }  = selectedOrder
  // if (Object.keys(startCoordinates).length === 0 || Object.keys(endCoordinates).length === 0) { return null }
  // return (
  //   <>
  //   <div>Start Lat: {startCoordinates.lat}</div>
  //   <div>Start Long: {startCoordinates.long}</div>
  //   <div>End Lat: {endCoordinates.lat}</div>
  //   <div>End Long: {endCoordinates.long}</div>
  //  </>
  // )
  return (
    <div className='leaflet-container'>
    <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
    </div>
  )
}

export default Map