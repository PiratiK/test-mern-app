import React, { Component } from 'react'
import styled from 'styled-components'
import {isMobileOnly} from 'react-device-detect'

import { VKShareButton, FacebookShareButton, TwitterShareButton, OKShareButton } from 'react-share'
import { VKIcon, FacebookIcon, TwitterIcon, OKIcon } from 'react-share'

const Container = styled.div.attrs({
    className: 'container position-absolute p-0',
})`
    width: 300px;
    top: calc(50% - 100px);
    left: calc(50% - 150px);
`

const P = styled.p.attrs({
})`
color: white;
font-size: 18px;
`

const MobileP = styled.p`
color: white;
font-size: 16px;
text-align: center;
`

const Number = styled.p.attrs({
    className: 'position-absolute'
})`
font-family: Shnobel;
font-size: 44px;
color: white;
left: -25%
`

const Row = styled.div.attrs({
    className: 'row'
})``

const Col = styled.div.attrs({
    className: 'col p-0 text-center'
})``

class Links extends Component {
    render() { 
        return (
            <Container>
                {isMobileOnly ? null : <Number>1.</Number>} 
                {isMobileOnly ? <MobileP>1. Поделитесь с друзьями:</MobileP> : <P>Поделитесь с друзьями:</P>}
                <Row>
                    <Col>
                        <VKShareButton
                            url={window.location.href}
                            image={`https://picsum.photos/200/200`}
                        >
                            <VKIcon size={53} round />
                        </VKShareButton>
                    </Col>
                    <Col>
                        <FacebookShareButton
                            url={window.location.href}
                            quote={`some text`}
                        >
                            <FacebookIcon size={53} round />
                        </FacebookShareButton>
                    </Col>
                    <Col>
                        <TwitterShareButton
                            url={window.location.href}
                            title={`some text`}
                        >
                            <TwitterIcon size={53} round/>
                        </TwitterShareButton>
                    </Col>
                    <Col>
                        <OKShareButton
                            url={window.location.href}
                            image={`https://picsum.photos/200/200`}
                        >
                            <OKIcon size={53} round/>
                        </OKShareButton>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Links