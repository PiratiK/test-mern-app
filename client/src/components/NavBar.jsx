import React, { Component } from 'react'
import styled from 'styled-components'

import Logo from './Logo'

const Container = styled.div.attrs({
    className: 'container',
})``

const Nav = styled.nav.attrs({
    className: 'navbar navbar-expand-lg'
})`
margin-bottom: 20px;
`

class NavBar extends Component {
    render() { 
        return (
            <Container>
                <Nav>
                    <Logo />
                </Nav>
            </Container>
        )
    }
}

export default NavBar