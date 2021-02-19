import React, { Component } from 'react'
import styled from 'styled-components'

import {isMobileOnly} from 'react-device-detect'

import logo from '../logo.svg'
import seven from '../7.svg'

const Wrapper = styled.a.attrs({
    className: 'navbar-brand',
})``

class Logo extends Component { 
    render() { 
        if(isMobileOnly)
        return (
            <Wrapper href="/">
                <img src={seven} width="34" height="33" alt="logo"></img>
            </Wrapper>
            )
        else
        return (
            <Wrapper href="/">
                <img src={logo} width="139" height="29" alt="logo"></img>
            </Wrapper>
            )
    }
}

export default Logo