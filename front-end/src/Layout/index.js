import React from 'react'
import styled from 'styled-components'

import {
	OnClickShowHideTitle,
	OnClickChangeBackground,
	OnClickGetValue,
} from '../examples'

const List = styled.ul`
	text-align: center;
`

const Item = styled.li`
	padding: 20px;
	border-bottom: 2px solid black;
`

const Layout = () => {
	return (
		<List>
			<Item>
				<OnClickShowHideTitle />
			</Item>
			<Item>
				<OnClickChangeBackground />
			</Item>
			<Item>
				<OnClickGetValue />
			</Item>
		</List>
	)
}

export default Layout
