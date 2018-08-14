import React from 'react'
import {shallow} from 'enzyme';

import Button from './Button'

let testLabel = "Label"
let secondLabel = "secondLabel"
let disabledCSSClass = "button_disabled"

describe('Basic button render:', () => {
	it('renders the label', () => {
		let button = shallow(<Button label={testLabel}/>)
		expect(button.html()).toContain(testLabel)
	})
	it('renders a disabled state', () => {
		let button = shallow(<Button label={testLabel} disabled/>)
		expect(button.html()).toContain(disabledCSSClass)
	})
	it('re-renders properly if props are changed after render', () => {
		let button = shallow(<Button label={testLabel} disabled/>)
		expect(button.html()).toContain(disabledCSSClass)
		button.setProps({disabled: false})
		expect(button.html()).not.toContain(disabledCSSClass)
		button.setProps({label: secondLabel})
		expect(button.html()).toContain(secondLabel)
	})
})

describe('Callback firing:', () => {
	it('fires the onClick prop', () => {
		let callback = jest.fn()
		let button = shallow(<Button label={testLabel} onClick={callback} />)
		button.find('button').simulate('click')
		expect(callback).toHaveBeenCalled()
	})
	it('fires the onMouseEnter prop', () => {
		let callback = jest.fn()
		let button = shallow(<Button label={testLabel} onMouseEnter={callback} />)
		button.find('button').simulate('mouseenter')
		expect(callback).toHaveBeenCalled()
	})
	it('fires the onMouseLeave prop', () => {
		let callback = jest.fn()
		let button = shallow(<Button label={testLabel} onMouseLeave={callback} />)
		button.find('button').simulate('mouseleave')
		expect(callback).toHaveBeenCalled()
	})
	it('fires the onFocus prop', () => {
		let callback = jest.fn()
		let button = shallow(<Button label={testLabel} onFocus={callback} />)
		button.find('button').simulate('focus')
		expect(callback).toHaveBeenCalled()
	})
	it('fires the onBlur prop', () => {
		let callback = jest.fn()
		let button = shallow(<Button label={testLabel} onBlur={callback} />)
		button.find('button').simulate('blur')
		expect(callback).toHaveBeenCalled()
	})
})
