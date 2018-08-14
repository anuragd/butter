import React from 'react'
import {shallow} from 'enzyme';

import Tooltip from './Tooltip'

let content = "Tooltip content"
let mode = "TOP_RIGHT"


describe('Basic Tooltip render:', () => {
	// Cannot test because of browser positioning dependencies
	// let wrapper
	// beforeAll(() => {
	// 	wrapper = shallow(<Tooltip content={content} mode={mode}>InnerHTML</Tooltip>)
	// })
	// it('renders the Tooltip', () => {
	// 	expect(wrapper.html()).toContain(content)
	// })
	// it('renders the tooltip icon', () => {
	// 	let icon = wrapper.find('img')
	// 	expect(icon).toHaveLength(1)
	// 	expect(icon.html()).toContain('svg')
	// })
})

