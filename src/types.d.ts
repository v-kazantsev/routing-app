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