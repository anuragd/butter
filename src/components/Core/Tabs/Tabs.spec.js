import React from 'react'
import {shallow} from 'enzyme';

import Tabs from './Tabs'

let options = ['Tab1','Tab2','Tab3','Tab4']
let activeTab = 'Tab2'


describe('Basic Tabs render:', () => {
	let wrapper
	beforeAll(() => {
		wrapper = shallow(<Tabs options={options} activeTab={activeTab} onChange={(val) => wrapper.setProps({activeTab:val})}/>)
	})
	it('renders the tabs', () => {
		options.forEach((option) => {
			expect(wrapper.html()).toContain(option)
		})
	})
	it('renders the active tab', () => {
		let active = wrapper.find('.active_tab')
		expect(active).toHaveLength(1)
		expect(active.text()).toEqual(activeTab)
	})
	/* The tests below require a full browser to test */
	// it('changes active tab on click', () => {
	// 	let newTab = wrapper.find('.tab_option').at(0)
	// 	let mockEvent = {
	// 		currentTarget: {
	// 			innerText: newTab.text()
	// 		}
	// 	}
	// 	newTab.simulate('click', mockEvent)
	// 	let active = wrapper.find('.active_tab')
	// 	expect(active.text()).toEqual(newTab.text())
	// })
})

