import React, { Component } from 'react'
import styled from 'styled-components'
import {isMobileOnly} from 'react-device-detect'

const Container = styled.div.attrs({
    className: 'container position-absolute p-0',
})`
    width: 300px;
    top: calc(50% + 10px);
    left: calc(50% - 150px);
`

const Number = styled.p.attrs({
    className: 'position-absolute'
})`
font-family: Shnobel;
font-size: 44px;
color: white;
left: -25%
`

const Form = styled.form``

const P = styled.p`
color: white;
font-size: 18px;
`

const MobileP = styled.p`
color: white;
font-size: 16px;
text-align: center;
`

const Input = styled.input.attrs({
    className: 'p-4',
    type: 'email',
    name: 'email',
    required: true,
})`
    width: 300px;
    height: 50px;
    border: none;
    border-radius: 50px;
    &:focus {
        outline: none;
    }
`

const Button = styled.button.attrs({
    type: 'submit',
})`
    font-family: Shnobel;
    font-size: 40px;
    color: white;
    width: 230px;
    height: 70px;
    position: relative;
    left: 35px;
    top: 40px;
    border-radius: 70px;
    border: 2px solid white;
    background: transparent;
    &:not(:disabled) {
        background: white;
        color: #7F4156;
        &:hover {
            background: #7F4156;
            border: none;
            color: white;
        }
    }
`

const MobileButton = styled.button.attrs({
    type: 'submit',
})`
    font-family: Shnobel;
    font-size: 30px;
    color: white;
    width: 300px;
    height: 70px;
    position: relative;
    top: 40px;
    border-radius: 70px;
    border: 2px solid white;
    background: transparent;
    &:not(:disabled) {
        background: white;
        color: #7F4156;
        &:hover {
            background: #7F4156;
            border: none;
            color: white;
        }
    }
`

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

class EmailForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            formErrors: { email: '' },
            emailValid: false,
            formValid: false,
        }
    }

    handleEmailInput = (e) => {
        const value = e.target.value
        this.state.email = value
        this.setState({ value }, () => { this.validateEmail(value) })
    }

    validateEmail(value) {
        let fieldValidationErrors = this.state.formErrors
        let emailValid = this.state.emailValid

        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
        fieldValidationErrors.email = emailValid ? '' : ' is invalid'

        this.setState({
            formErrors: fieldValidationErrors,
            emailValid: emailValid,
        }, this.validateForm)
    }

    validateForm() { 
        this.setState({
            formValid: this.state.emailValid
        })
    }

    render() {
        let email = this.props.email
        if(email != null)
            this.state.email = email
        return (
            <Container>
                {email != null
                    ? <Checkbox className={`styled-checkbox`} id="styled-checkbox-1" type="checkbox" value="value1" disabled checked />
                    : null}
                {email != null
                    ? (isMobileOnly
                        ? <label style={{ left: `5%` }}></label>
                        : <label style={{ left: `-15%` }}></label>)
                    : null}
                {isMobileOnly || email != null ? null : <Number>2.</Number>} 
                <Form>
                    {isMobileOnly ? <MobileP>2. Оставь почту:</MobileP> : <P>Оставь почту:</P>}
                    <Input value={this.state.email} onChange={this.handleEmailInput} disabled={email != null}/>
                    {
                        email == null ?
                            (isMobileOnly
                                ? <MobileButton disabled={!this.state.formValid} onClick={() => this.props.changeEmail(this.state.email)}>Отправить</MobileButton>
                                : <Button disabled={!this.state.formValid} onClick={() => this.props.changeEmail(this.state.email)}>Отправить</Button>)
                        : null
                    }
                </Form>
            </Container>
        )
    }
}

export default EmailForm