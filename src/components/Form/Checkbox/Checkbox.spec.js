import React from 'react'
import {shallow} from 'enzyme'

import Checkbox from './Checkbox'

let data = [
	{id:0,value:"Option 1"},
	{id:1,value:"Option 2", disabled: true},
	{id:2,value:"Option 3"},
	{id:3,value:"Option 4"}
]
let label = 'Checkbox 1'
let newLabel = 'Checkbox 2'

describe("Basic checkbox render", () => {
	let wrapper
	beforeAll(() => {
		wrapper = shallow(
			<Checkbox 
				label={label}
				options={data} 
				value={[data[0]]} 
				onChange={(value) => wrapper.setProps({value:value})} 
			/>)
	})
	it('renders all the options', () => {
		data.forEach((option) => {
			expect(wrapper.html()).toContain(option.value)
		})
	})
	it('renders disabled options', () => {
		let count = data.filter((point) => point.disabled).length
		expect(wrapper.find('.disabled_container').length).toEqual(count)
	})
	it('renders selected options', () => {
		let activeContainers = wrapper.find('.value_active')
		expect(activeContainers.length).toEqual(1)
		expect(activeContainers.html()).toContain(data[0].value)
	})
	it('updates properties on changing props', () => {
		let newData = [data[2],data[3]]
		wrapper.setProps({options: newData, label: newLabel, value: []})
		expect(wrapper.find('.option_container').length).toEqual(newData.length)
		expect(wrapper.find('.value_active').length).toEqual(0)
	})
	it('renders the disabled state', () => {
		wrapper.setProps({disabled: true})
		expect(wrapper.find('.disabled_top_container').length).toEqual(1)
	})
})

describe('User interactions', () => {
	let wrapper
	let mockFunction = jest.fn()
	beforeAll(() => {
		wrapper = shallow(
			<Checkbox 
				label={label}
				options={data} 
				value={[data[2]]} 
				onChange={(value) => {
					mockFunction()
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
	it('fires onChange when an option is selected and renders appropriately', () => {
		let newOption = wrapper.find('.option_container').at(0)
		expect(newOption.html()).toContain(data[0].value)
		newOption.simulate('click')
		expect(mockFunction).toHaveBeenCalled()
		expect(wrapper.find('.value_active').length).toEqual(2)
	})
	it('fires onChange when an option is unselected and renders appropriately', () => {
		let newOption = wrapper.find('.option_container').at(0)
		expect(newOption.html()).toContain(data[0].value)
		newOption.simulate('click')
		expect(mockFunction).toHaveBeenCalled()
		expect(wrapper.find('.value_active').length).toEqual(1)
	})
	it('fires onMouseEnter event', () => {
		wrapper.setProps({onMouseEnter: mockFunction})
		wrapper.simulate('mouseenter',{})
		expect(mockFunction).toHaveBeenCalled()
	})
	it('fires onMouseLeave event', () => {
		wrapper.setProps({onMouseLeave: mockFunction})
		wrapper.simulate('mouseleave',{})
		expect(mockFunction).toHaveBeenCalled()
	})
	it('fires onFocus event', () => {
		wrapper.setProps({onFocus: mockFunction})
		wrapper.simulate('focus',{})
		expect(mockFunction).toHaveBeenCalled()
	})
	it('fires onBlur event', () => {
		wrapper.setProps({onBlur: mockFunction})
		wrapper.simulate('blur',{})
		expect(mockFunction).toHaveBeenCalled()
	})
})