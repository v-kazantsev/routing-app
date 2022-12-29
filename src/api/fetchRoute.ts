import { API_URL } from 'consts'

interface IParams {
  startCoordinates: Coordinates
  endCoordinates: Coordinates
}

export default function fetchRoute({
  startCoordinates, endCoordinates
}: IParams) {
  return fetch(`${API_URL}/${startCoordinates.long},${startCoordinates.lat};${endCoordinates.long},${endCoordinates.lat}?overview=false&alternatives=true&steps=true&hints=;`)
  .then(res => res.json())
}
