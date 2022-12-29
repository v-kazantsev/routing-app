//@ts-nocheck
import { createControlComponent } from '@react-leaflet/core'
import L from 'leaflet'

const createRoutingControl = ({ route }) => {
  return createControlComponent(() => route)
}

export default createRoutingControl

// export default createControlComponent(createRoutingControl)
