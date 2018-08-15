import React from 'react'
import {shallow} from 'enzyme'

import Dropdown from './Dropdown'

let data = [
	{id:0,value:"Option 1"},
	{id:1,value:"Option 2", disabled: true},
	{id:2,value:"Option 3"},
	{id:3,value:"Option 4"}
]
let label = 'Dropdown'
let newLabel = 'Dropdown 2'

describe("Basic Dropdown render", () => {
	let wrapper
	beforeAll(() => {
		wrapper = shallow(
			<Dropdown 
				label={label}
				options={data} 
				value={null} 
				onChange={(value) => wrapper.setProps({value:value})} 
			/>)
	})
	it('renders the large label', () => {
		expect(wrapper.find('.float_label').text()).toEqual(label)
	})
	it('renders the options', () => {
		data.forEach((option) => {
			expect(wrapper.html()).toContain(option.value)
		})
	})
	it('renders the dropdown arrow', () => {
		expect(wrapper.find('img.arrow').length).toEqual(1)
	})
	it('renders selected state correctly', () => {
		wrapper.setProps({value: data[0]})
		expect(wrapper.find('.float_label').length).toEqual(0)
		expect(wrapper.find('.focus_label').length).toEqual(1)
		expect(wrapper.find('.focus_label').text()).toEqual(label)
		expect(wrapper.find('.selected_option').text()).toEqual(data[0].value)
	})
	it('renders the disabled state', () => {
		wrapper.setProps({disabled: true})
		expect(wrapper.find('.disabled_header').length).toEqual(1)
	})
})


describe('User interactions', () => {
	let wrapper
	let mockFunction = jest.fn()
	let mockWrapper = (...args) => mockFunction(args)
	beforeAll(() => {
		wrapper = shallow(
			<Dropdown 
				label={label}
				options={data} 
				value={null} 
				onChange={(value) => {
					mockWrapper()
					wrapper.setProps({value:value})
				}}
				onMouseEnter={mockWrapper}
				onMouseLeave={mockWrapper}
				onFocus={mockWrapper}
				onBlur={mockWrapper}
			/>)
	})
	beforeEach(() => {
		mockFunction.mockClear()
	})
	it('opens the dropdown on click', () => {
		expect(wrapper.find('.open_list').length).toEqual(0)
		wrapper.find('.header').simulate('click')
		expect(wrapper.find('.open_list').length).toEqual(1)
	})
	it('renders selected option on click', () => {
		wrapper.find('.options li:first-child').simulate('click')
		expect(mockFunction).toHaveBeenCalled()
		expect(wrapper.find('.open_list').length).toEqual(0)
		expect(wrapper.find('.float_label').length).toEqual(0)
		expect(wrapper.find('.focus_label').length).toEqual(1)
		expect(wrapper.find('.focus_label').text()).toEqual(label)
		expect(wrapper.find('.selected_option').text()).toEqual(data[0].value)
	})
	it('doesn\'t allow clicking of disabled option', () => {
		expect(wrapper.find('.open_list').length).toEqual(0)
		wrapper.find('.header').simulate('click')
		expect(wrapper.find('.open_list').length).toEqual(1)
		wrapper.find('.options li').at(1).simulate('click')
		expect(wrapper.find('.open_list').length).toEqual(1)
		expect(mockFunction).not.toHaveBeenCalled()	
	})
	it('closes dropdown on click of header area', () => {
		wrapper.find('.open_header').simulate('click')
		expect(wrapper.find('.open_list').length).toEqual(0)
		expect(wrapper.find('.list').length).toEqual(1)
		expect(wrapper.find('.header').length).toEqual(1)
	})
	it('closes dropdown on loss of focus', () => {
		wrapper.find('.header').simulate('click')
		expect(wrapper.find('.open_list').length).toEqual(1)
		//Dropdown is open
		wrapper.simulate('blur', {stopPropagation: () => true, preventDefault: () => true})
		expect(wrapper.find('.open_list').length).toEqual(0)
	})
	it('fires onChange when selection is changed and renders appropriately', () => {
		expect(wrapper.find('.open_list').length).toEqual(0)
		wrapper.find('.header').simulate('click')
		expect(wrapper.find('.open_list').length).toEqual(1)
		wrapper.find('.options li').at(2).simulate('click')
		expect(mockFunction).toHaveBeenCalled()
		expect(wrapper.find('.open_list').length).toEqual(0)
		expect(wrapper.find('.float_label').length).toEqual(0)
		expect(wrapper.find('.focus_label').length).toEqual(1)
		expect(wrapper.find('.focus_label').text()).toEqual(label)
		expect(wrapper.find('.selected_option').text()).toEqual(data[2].value)
	})
	it('fires onMouseEnter event', () => {
		wrapper.simulate('mouseenter')
		expect(mockFunction).toHaveBeenCalled()
	})
	it('fires onMouseLeave event', () => {
		wrapper.simulate('mouseleave')
		expect(mockFunction).toHaveBeenCalled()
	})
	it('fires onFocus event', () => {
		wrapper.simulate('focus')
		expect(mockFunction).toHaveBeenCalled()
	})
	it('fires onBlur event', () => {
		wrapper.simulate('blur', {stopPropagation: () => true, preventDefault: () => true})
		expect(mockFunction).toHaveBeenCalled()
	})
})