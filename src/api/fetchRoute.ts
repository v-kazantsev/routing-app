import { API_URL } from 'consts'

interface IParams {
  startCoordinates: Coordinates
  endCoordinates: Coordinates
}

export default function fetchRoute({
  startCoordinates, endCoordinates
}: IParams) {
  return fetch(`${API_URL}/${startCoordinates.long},${startCoordinates.lat};${endCoordinates.long},${endCoordinates.lat}?steps=true&geometries=geojson&overview=full`)
  .then(res => res.json())
}
