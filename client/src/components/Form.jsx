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
        return (
            <Container>
                {isMobileOnly ? null : <Number>2.</Number>} 
                <Form>
                    {isMobileOnly ? <MobileP>2. Оставь почту:</MobileP> : <P>Оставь почту:</P>}
                    <Input value={this.state.email} onChange={this.handleEmailInput} />
                    {
                        isMobileOnly
                        ? <MobileButton disabled={!this.state.formValid}>Отправить</MobileButton>
                        : <Button disabled={!this.state.formValid}>Отправить</Button>
                    }
                </Form>
            </Container>
        )
    }
}

export default EmailForm