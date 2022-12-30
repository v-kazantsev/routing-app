import { useMap } from 'react-leaflet'
import isEmpty from 'lodash/isEmpty'

const AutoFit = ({ bounds }: any) => {
  const map = useMap()
  if (!map || isEmpty(bounds)) return null
  map.fitBounds(bounds)
  return null
}

export default AutoFit