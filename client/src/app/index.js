import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import styled from 'styled-components'

import { NavBar } from '../components'
import { MainScreen, FinalScreen } from '../pages'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div style={{
      backgroundImage: `url(${process.env.PUBLIC_URL + '/img/back.jpg'})`,
      height: `100vh`,
    }}>
      <NavBar />
      <Router>
        <Switch>
          <Route path="/" exact component={ MainScreen }/>
          <Route path="/final" exact component={ FinalScreen }/>
        </Switch>
      </Router>
    </div>
  )
}

export default App;
