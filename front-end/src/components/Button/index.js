import React from 'react'
import { Button as Wrapper } from 'react-bootstrap'

const Button = props => <Wrapper {...props}>{props.children}</Wrapper>

export default Button
