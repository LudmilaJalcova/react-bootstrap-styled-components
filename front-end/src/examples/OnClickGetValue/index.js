import React, { useState } from 'react'
import { Button, ButtonGroup, ButtonToolbar } from 'react-bootstrap'

const OnClickGetValue = () => {
	const [getValue, setgetValue] = useState(0)

	return (
		<div>
			<ButtonToolbar
				className="justify-content-center"
				aria-label="Toolbar with button groups">
				<ButtonGroup className="mr-2" aria-label="First group">
					<Button
						onClick={e => {
							setgetValue(e.target.textContent)
						}}>
						1
					</Button>
				</ButtonGroup>
				<ButtonGroup className="mr-2" aria-label="Second group">
					<Button onClick={() => setgetValue(2)}>2</Button>
				</ButtonGroup>
				<ButtonGroup className="mr-2" aria-label="Third group">
					<Button onClick={() => setgetValue(3)}>3</Button>
				</ButtonGroup>
				<ButtonGroup className="mr-2" aria-label="Forth group">
					<Button onClick={() => setgetValue(4)}>4</Button>
				</ButtonGroup>
			</ButtonToolbar>
			{getValue > 0 && <h1>{getValue}</h1>}
		</div>
	)
}

export default OnClickGetValue
