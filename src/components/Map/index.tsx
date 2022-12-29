import { useSelector } from 'react-redux'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import Routing from './Routing'
import './style.css'

const Map = () => {
  
  return (
    <div className='leaflet-container'>
    <MapContainer center={[59.84660399, 30.29496392]} zoom={10} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Routing />
    </MapContainer>
    </div>
  )
}

export default Map