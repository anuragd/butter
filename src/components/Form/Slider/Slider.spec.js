import React from 'react'
import { shallow } from 'enzyme'

import Slider from './Slider'

let label = "Slider label"
let min = 20
let max = 80
let value = 30

describe('Basic slider render', () => {
	let wrapper
	beforeAll(() => {
		wrapper = shallow(
			<Slider
				label={label}
				value={value}
				min={min}
				max={max}
				onChange={(val) => wrapper.setProps({value:val})}
				/>
		)
	})

	it('renders the label', () => {
		expect(wrapper.html()).toContain(label)
	})
	it('renders the track', () => {
		expect(wrapper.find('.track').length).toEqual(1)
	})
	it('renders the thumb', () => {
		expect(wrapper.find('.thumb').length).toEqual(1)
	})
	it('renders the active range', () => {
		expect(wrapper.find('.active_range').length).toEqual(1)
	})
	it('renders the manual input / display', () => {
		expect(wrapper.find('input').length).toEqual(1)
	})
	it('renders disabled state', () => {
		wrapper.setProps({disabled:true})
		expect(wrapper.find('.thumb_disabled').length).toEqual(1)
		expect(wrapper.find('.active_range_disabled').length).toEqual(1)
		expect(wrapper.find('.input_disabled').length).toEqual(1)
	})
})

describe('User interactions', () => {
	let wrapper
	let mockFunction = jest.fn()
	beforeAll(() => {
		wrapper = shallow(
			<Slider
				label={label}
				value={value}
				min={min}
				max={max}
				onChange={(val) => {
					mockFunction()
					wrapper.setProps({value:val})
				}}
				onFocus={mockFunction}
				onBlur={mockFunction}
				onMouseEnter={mockFunction}
				onMouseLeave={mockFunction}
				/>
		)
	})
	beforeEach(() => {
		mockFunction.mockClear()
	})
	it('updates values on input entry', () => {
		wrapper.find('input').simulate('keyup',{keyCode: 13,target:{value:min}})
		expect(mockFunction).toHaveBeenCalled()
		expect(wrapper.find('input').props().value).toEqual(min)
	})
	if('disallows input values beyond the specified range', () => {
		wrapper.setProps({value:max+50})
		expect(wrapper.find('input').props().value).toEqual(max)
		wrapper.setProps({value:min-50})
		expect(wrapper.find('input').props().value).toEqual(min)
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