import React, { Component } from 'react'
import styled from 'styled-components'
import {isMobileOnly} from 'react-device-detect'

const Man = styled.img`
    height: 100%;
    position: absolute;
    margin: auto;
    top: 0;
    left: 0;
    right: 0;
    bottom: 50px;
    z-index: 1;
`

const MobileMan = styled.img`
    width: 100%;
    position: absolute;
    margin: auto;
    left: 0;
    right: 0;
    bottom: 50px;
    z-index: 1;
`

const Ground = styled.img`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100px;
`

class FinalScreen extends Component {
    render() {
        if (isMobileOnly) { 
            return (
                <div>
                    <MobileMan src={`${process.env.PUBLIC_URL + '/img/man.png'}`} ></MobileMan>
                    <Ground src={`${process.env.PUBLIC_URL + '/img/ground.png'}`}></Ground>
                </div>
            )
        }
        return (
            <div>
                <Man src={`${process.env.PUBLIC_URL + '/img/man.png'}`} ></Man>
                <Ground src={`${process.env.PUBLIC_URL + '/img/ground.png'}`}></Ground>
            </div>
        )
    }
}

export default FinalScreen