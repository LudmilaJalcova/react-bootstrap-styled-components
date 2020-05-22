import React, { useState } from 'react'
import styled from 'styled-components'
import { Button } from '../../components'

const Wrapper = styled(Button)`
	/* state je hodnota atributu ktoru vieme vytahovat tymto spôsobom */
	background-color: ${({ state }) => (state ? 'white' : 'black')};
	color: ${({ state }) => (state ? 'black' : 'white')};
`

const OnClickChangeBackground = () => {
	// useState je hook ktorim vieme definovat zaciatocny stav v js z tohto hooku vytahujeme dve aktualny stav, a funkciu pomocou ktorej vieme zmenit ulozeny aktualny stav
	const [state, setstate] = useState(true)

	return (
		<Wrapper onClick={() => setstate(!state)} state={state}>
			{state ? 'black' : 'white'}
		</Wrapper>
	)
}

export default OnClickChangeBackground
