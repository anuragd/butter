import React from 'react'
import {shallow} from 'enzyme';

import NoDataPanel from './NoDataPanel'


describe('Basic panel render:', () => {
	it('renders the icon', () => {
		let wrapper = shallow(<NoDataPanel />)
		expect(wrapper.find('img').html()).toContain('svg')
	})
	it('renders the message', () => {
		let wrapper = shallow(<NoDataPanel />)
		expect(wrapper.html()).toContain('no_data_message')
		expect(wrapper.html()).toContain('No Data')
	})
})

