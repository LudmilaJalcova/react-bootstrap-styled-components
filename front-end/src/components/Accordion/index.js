import React from 'react'
import { Accordion as Wrapper } from 'react-bootstrap'

const Accordion = props => <Wrapper {...props}>{props.children}</Wrapper>

export default Accordion
