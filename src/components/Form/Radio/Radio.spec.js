import React from 'react'
import {shallow} from 'enzyme'

import Radio from './Radio'

let data = [
	{id:0,value:"Option 1"},
	{id:1,value:"Option 2", disabled: true},
	{id:2,value:"Option 3"},
	{id:3,value:"Option 4"}
]
let label = 'Radio 1'
let newLabel = 'Radio 2'

describe("Basic Radio render", () => {
	let wrapper
	beforeAll(() => {
		wrapper = shallow(
			<Radio 
				label={label}
				options={data} 
				value={data[0]} 
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
		expect(wrapper.find('.disabled_option').length).toEqual(count)
	})
	it('renders selected options', () => {
		let activeContainers = wrapper.find('.selected_radio_value')
		expect(activeContainers.length).toEqual(1)
		expect(activeContainers.html()).toContain(data[0].value)
	})
	it('renders disabled options', () => {
		let count = data.filter((option) => option.disabled).length
		expect(wrapper.find('.disabled_option').length).toEqual(count)
	})
	it('renders disabled state', () => {
		wrapper.setProps({disabled: true})
		wrapper.find(".radio_option").forEach((option) => {
			expect(option.hasClass('disabled_option')).toBeTruthy()
		})
	})
	it('updates properties on changing props', () => {
		let newData = [data[2],data[3]]
		wrapper.setProps({options: newData, label: newLabel, value: null, disabled: false})
		expect(wrapper.find('.radio_option').length).toEqual(newData.length)
		expect(wrapper.find('.selected_radio_value').length).toEqual(0)
	})
})

describe('User interactions', () => {
	let wrapper
	let mockFunction = jest.fn()
	beforeAll(() => {
		wrapper = shallow(
			<Radio 
				label={label}
				options={data} 
				value={null} 
				onChange={(value) => {
					mockFunction()
					wrapper.setProps({value:value})
				}}
				onFocus={mockFunction}
				onBlur={mockFunction}
				onMouseEnter={mockFunction}
				onMouseLeave={mockFunction} 
			/>)
	})
	beforeEach(() => {
		mockFunction.mockClear()
	})
	it('changes active option on click', () => {
		wrapper.find('.radio_option').at(2).simulate('click')
		let activeContainers = wrapper.find('.selected_radio_value')
		expect(activeContainers.length).toEqual(1)
		expect(activeContainers.html()).toContain(data[2].value)
		expect(mockFunction).toHaveBeenCalled()
	})
	it('disallows clicking of disabled option', () => {
		//Reset wrapper
		wrapper.setProps({value:null})
		expect(wrapper.find('.selected_radio_value').length).toEqual(0)
		wrapper.find('.radio_option').at(1).simulate('click')
		expect(wrapper.find('.selected_radio_value').length).toEqual(0)
		expect(mockFunction).not.toHaveBeenCalled()
	})
	it('fires onFocus event', () => {
		wrapper.simulate('focus')
		expect(mockFunction).toHaveBeenCalled()
	})
	it('fires onBlur event', () => {
		wrapper.simulate('blur')
		expect(mockFunction).toHaveBeenCalled()
	})
	it('fires onMouseEnter event', () => {
		wrapper.simulate('mouseenter')
		expect(mockFunction).toHaveBeenCalled()
	})
	it('fires onMouseLeave event', () => {
		wrapper.simulate('mouseleave')
		expect(mockFunction).toHaveBeenCalled()
	})
})