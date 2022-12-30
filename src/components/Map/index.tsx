//@ts-nocheck
import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { MapContainer, TileLayer, Marker, Polyline } from 'react-leaflet'
import isEmpty from 'lodash/isEmpty'
import { MapPlaceholder, AutoFit } from 'components'
import { routeSelector, selectedOrderSelector } from 'store/selectors'
import './style.css'
import { LatLngExpression } from 'leaflet'

const Map = () => {
  const selectedOrder = useSelector(selectedOrderSelector)
  const { startCoordinates, endCoordinates } = selectedOrder
  const startPoint = [startCoordinates?.lat, startCoordinates?.long]
  const endPoint = [endCoordinates?.lat, endCoordinates?.long] 
  const route = useSelector(routeSelector)
  const waypoints = useMemo(() => {
    if (isEmpty(route)) return [] as LatLngExpression[]
    return route.reduce((acc, item: Waypoints) => {
     return [...acc, [item[1], item[0]]]
    }, [] as LatLngExpression[])
  }, [route])
  if (isEmpty(selectedOrder) || !startCoordinates || !endCoordinates) return <MapPlaceholder />
  return (
    <div className='leaflet-container'>
    <MapContainer center={startPoint} zoom={11} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={startPoint} />
      <Marker position={endPoint} />
      <Polyline color={"cyan"} weight={4} positions={waypoints} />
      <AutoFit bounds={[startPoint, endPoint]} />
    </MapContainer>
    </div>
  )
}

export default Map
