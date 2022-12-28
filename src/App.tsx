import React from 'react'
import { Container, Home } from 'components'
import Store from 'store'

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
