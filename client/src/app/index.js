import React from 'react'
import styled from 'styled-components'
import {isMobileOnly} from 'react-device-detect'

import { NavBar, Links, EmailForm } from '../components'

import 'bootstrap/dist/css/bootstrap.min.css'

import '../fonts/shnobel.css'

const Container = styled.div.attrs({
  className: 'container position-absolute p-0',
})`
  width: 300px;
  top: calc(50% - 300px);
  left: calc(50% - 150px);
`

const MobileContainer = styled.div.attrs({
  className: 'container position-absolute p-0',
})`
  width: 300px;
  top: calc(50% - 160px);
  left: calc(50% - 150px);
`

const Title = styled.p.attrs({
  className: 'position-absolute text-center'
})`
  width: 300px;
  font-family: Shnobel;
  font-size: 50px;
  color: white;
`

const MobileTitle = styled.p.attrs({
  className: 'position-absolute text-center'
})`
  width: 300px;
  font-family: Shnobel;
  font-size: 27px;
  color: white;
`

function App() {
  return (
    <div style={{
      // backgroundImage: `url(${bg})`,
      backgroundImage: `url(${process.env.PUBLIC_URL + '/img/back.jpg'})`,
      height: `100vh`,
    }}>
      <NavBar />
      {isMobileOnly
        ?
        <MobileContainer>
          <MobileTitle>Чтобы выиграть путешествие</MobileTitle>
        </MobileContainer>
        :
        <Container>
          <Title>Чтобы выиграть путешествие</Title>
        </Container>
        }
      <Links />
      <EmailForm />
    </div>
  )
}

export default App;
