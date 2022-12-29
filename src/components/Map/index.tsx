import { useSelector } from 'react-redux'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import Routing from './Routing'
import './style.css'

const Map = () => {
  const { selectedOrder } = useSelector((state: any) => state.selectedOrder)
  const { startCoordinates, endCoordinates } = selectedOrder
  return (
    <div className='leaflet-container'>
    <MapContainer center={[startCoordinates?.lat, startCoordinates?.long]} zoom={11} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[startCoordinates?.lat, startCoordinates?.long]} />
      <Marker position={[endCoordinates?.lat, endCoordinates?.long]} />
    </MapContainer>
    </div>
  )
}

export default Map