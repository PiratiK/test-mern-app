import React, { Component } from 'react'

import styled from 'styled-components'
import {isMobileOnly} from 'react-device-detect'

import { Links, EmailForm } from '../components'

import api from '../api'

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

class MainScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: 1,
            shared: false,
            email: null,
        }
    }

    componentDidMount = async () => { 
        const { id, shared, email } = this.state
        const payload = { id, shared, email }
        await api.insertUser(payload).then(res => {
            if (res.status == 200) {
                this.setState({
                    shared: res.data.data.shared,
                    email: res.data.data.email,
                })
            } 
        })
    }

    changeShared = async (newValue) => {
        this.setState({
            shared: newValue,
        }, async () => { 
            const { id, shared, email } = this.state
            const payload = { shared, email }
            await api.updateUserById(id, payload)
        })
    }

    changeEmail = (newValue) => {
        this.setState({
            email: newValue,
        }, async () => {
            const { id, shared, email } = this.state
            const payload = { shared, email }
            await api.updateUserById(id, payload)
        })
    }

    // finale = event => {
    //     event.preventDefault()

    //     if (this.state.shared && this.state.email != null) { 
    //         window.location.href = `/final`
    //     }
    // }

    render() {
        if (this.state.shared && this.state.email != null) { 
            window.location.href = `/final`
        }
        return (
            <div>
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
                <Links shared={this.state.shared} changeShared={ this.changeShared.bind(this) } />
                <EmailForm email={this.state.email} changeEmail={this.changeEmail.bind(this)} />
            </div>
        )
    }
}

export default MainScreen;
