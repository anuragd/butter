import React from 'react'
import renderer from 'react-test-renderer'

import Button from './Button'

test("Render a normal button", () => {
	const component = renderer.create(
		<Button label="Button" />
	)
	let tree = component.toJSON()
	expect(tree).toMatchSnapshot()
})
