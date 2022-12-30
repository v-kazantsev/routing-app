//@ts-nocheck
import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { MapContainer, TileLayer, Marker, Polyline } from 'react-leaflet'
import isEmpty from 'lodash/isEmpty'
import { MapPlaceholder, AutoFit } from 'components'
import { routeSelector, selectedOrderSelector } from 'store/selectors'
import './style.css'

const Map = () => {
  const selectedOrder = useSelector(selectedOrderSelector)
  const { startCoordinates, endCoordinates } = selectedOrder
  const route = useSelector(routeSelector)
  const waypoints = useMemo(() => {
    if (isEmpty(route)) return [] as Waypoints
    return route.reduce((acc: Waypoints, item: Waypoints) => {
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
      <Polyline color={"cyan"} weight={4} positions={waypoints} />
      <AutoFit bounds={[[startCoordinates?.lat, startCoordinates?.long], [endCoordinates?.lat, endCoordinates?.long]]} />
    </MapContainer>
    </div>
  )
}

export default Map
