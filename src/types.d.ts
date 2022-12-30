declare type Coordinates = {
  lat: number
  long: number
}

declare interface IOrder {
  key: string
  number: string
  startCoordinates: Coordinates
  endCoordinates: Coordinates
}

declare type Waypoints = Array<[LatLngExpression]>

interface Geometry {
  type: string
  coordinates: Waypoints
}

type IRoutes = {
  routes: [Geometry]
}

declare interface IRawRoute {
  route: [IRoutes]
}
