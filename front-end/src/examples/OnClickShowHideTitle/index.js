import React, { useState } from 'react'
import styled from 'styled-components'
import { Button, Accordion } from '../../components'
// import { Badge} from '../../components'

const Wrapper = styled.div`
	text-align: center;
	display: flex;
	flex-direction: column;
`

const Title = styled.h1`
	text-align: center;
`

//skus vytvorit tlacitko ktorim budem schovavat a zobrazovat h1 nadpis s textom ahoj

const OnClickShowHideTitle = () => {
	// skratka pre zapis stavoveho hooku je 'usst'
	const [showTitle, setshowTitle] = useState(false)

	return (
		<Wrapper>
			<Button onClick={() => setshowTitle(!showTitle)} variant="info">
				{showTitle ? 'schovaj ahoj' : 'zobraz ahoj'}
			</Button>
			{showTitle && <Title>ahoj</Title>}

			<Accordion
				as={Button}
				onClick={() => setshowTitle(!showTitle)}
				variant="link">
				{showTitle ? 'click to hide the body' : 'click to show the body'}
			</Accordion>
			{showTitle && <Title>Hello! I am the body</Title>}
		</Wrapper>
	)
}

export default OnClickShowHideTitle
