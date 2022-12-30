import L from 'leaflet'
import { Container, Home } from 'components'
import Store from 'store'

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
})

function App() {
  return (
    <Store>
      <Container>
        <Home />
      </Container>
    </Store>
  )
}

export default App
