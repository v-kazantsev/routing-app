import { useMap } from 'react-leaflet'
import isEmpty from 'lodash/isEmpty'
import { LatLngBoundsExpression } from 'leaflet'

const AutoFit = ({ bounds }: { bounds: LatLngBoundsExpression }) => {
  const map = useMap()
  if (!map || isEmpty(bounds)) return null
  map.fitBounds(bounds)
  return null
}

export default AutoFit