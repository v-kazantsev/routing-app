import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { MapContainer, TileLayer, Marker, Polyline } from 'react-leaflet'
import isEmpty from 'lodash/isEmpty'
import { MapPlaceholder } from 'components'
import './style.css'

const Map = () => {
  const { selectedOrder } = useSelector((state: any) => state.selectedOrder)
  const { startCoordinates, endCoordinates } = selectedOrder
  const { route } = useSelector((state: any) => state.route)
  const waypoints = useMemo(() => {
    if (isEmpty(route)) return []
    return route.routes[0].geometry.coordinates.reduce((acc: Waypoints, item: number[]) => {
     return [...acc, [item[1], item[0]]]
    }, [])
  }, [route])
  if (isEmpty(selectedOrder)) return <MapPlaceholder />
  return (
    <div className='leaflet-container'>
    <MapContainer center={[startCoordinates?.lat, startCoordinates?.long]} zoom={11} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[startCoordinates?.lat, startCoordinates?.long]} />
      <Marker position={[endCoordinates?.lat, endCoordinates?.long]} />
      <Polyline color={"cyan"} weight={4} positions={waypoints || []} />
    </MapContainer>
    </div>
  )
}

export default Map
