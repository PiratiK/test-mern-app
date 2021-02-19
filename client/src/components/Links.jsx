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

const Checkbox = styled.input`
position: absolute;
  opacity: 0;

  & + label {
    position: absolute;
    padding: 0;
  }

  & + label:before {
    content: "";
    margin-right: 10px;
    display: inline-block;
    vertical-align: text-top;
    width: 20px;
    height: 20px;
    background: white;
  }

  &:disabled + label {
    color: white;
    cursor: auto;
  }

  &:disabled + label:before {
    box-shadow: none;
    background: #7F4156;
  }

  &:checked + label:after {
    content: "";
    position: absolute;
    left: 5px;
    top: 9px;
    background: white;
    width: 2px;
    height: 2px;
    box-shadow: 2px 0 0 white, 4px 0 0 white, 4px -2px 0 white, 4px -4px 0 white,
      4px -6px 0 white, 4px -8px 0 white;
    transform: rotate(45deg);
  }
`

class Links extends Component {
    render() { 
        let shared = this.props.shared
        return (
            <Container>
                {shared
                    ? <Checkbox className={`styled-checkbox`} id="styled-checkbox-1" type="checkbox" value="value1" disabled checked />
                    : null}
                {shared
                    ? (isMobileOnly
                        ? <label style={{ left: `5%` }}></label>
                        : <label style={{ left: `-15%` }}></label>)
                    : null}
                {isMobileOnly || shared
                    ? null
                    : <Number>1.</Number>} 
                {isMobileOnly
                    ? <MobileP>1. Поделитесь с друзьями:</MobileP>
                    : <P>Поделитесь с друзьями:</P>}
                <Row>
                    <Col>
                        <VKShareButton
                            url={window.location.href}
                            image={`https://picsum.photos/200/200`}
                            disabled={shared ? true : false}
                            onShareWindowClose={() => this.props.changeShared(true)}
                        >
                            <VKIcon size={53} round />
                        </VKShareButton>
                    </Col>
                    <Col>
                        <FacebookShareButton
                            url={window.location.href}
                            quote={`some text`}
                            disabled={shared ? true : false}
                            onShareWindowClose={() => this.props.changeShared(true)}
                        >
                            <FacebookIcon size={53} round />
                        </FacebookShareButton>
                    </Col>
                    <Col>
                        <TwitterShareButton
                            url={window.location.href}
                            title={`some text`}
                            disabled={shared ? true : false}
                            onShareWindowClose={() => this.props.changeShared(true)}
                        >
                            <TwitterIcon size={53} round/>
                        </TwitterShareButton>
                    </Col>
                    <Col>
                        <OKShareButton
                            url={window.location.href}
                            image={`https://picsum.photos/200/200`}
                            disabled={shared ? true : false}
                            onShareWindowClose={() => this.props.changeShared(true)}
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