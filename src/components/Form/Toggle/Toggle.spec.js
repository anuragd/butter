import React from 'react'
import { shallow } from 'enzyme'

import Toggle from './Toggle'

let value = false
let label = "Toggle label"
let newLabel = "New Toggle label"
let valueLabels = {
	on:"yes",
	off:"no"
}
let newValueLabels = {
	on:"Ja",
	off:"Nein"
}
let mode = 'NORMAL'
let newMode = 'GOOD'

describe('Basic Toggle render', () => {
	let wrapper
	beforeAll(() => {
		wrapper = shallow(
			<Toggle 
				value={value} 
				onChange={(val) => wrapper.setProps({value: val})} 
				label={label} 
				mode={mode}
				valueLabels={valueLabels}/>)
	})
	it('renders the label', () => {
		expect(wrapper.html()).toContain(label)
	})
	it('renders the correct value label', () => {
		expect(wrapper.html()).toContain(valueLabels.off)
		expect(wrapper.html()).not.toContain(valueLabels.on)
	})
	it('renders the correct state', () => {
		expect(wrapper.find('.thumb_on').length).toEqual(0)
		expect(wrapper.find('.thumb').length).toEqual(1)
		expect(wrapper.find('.track_on').length).toEqual(0)
		expect(wrapper.find('.track').length).toEqual(1)
	})
	it('updates render on passing new props', () => {
		wrapper.setProps({label:newLabel, valueLabels: newValueLabels, mode: newMode, value: true})
		expect(wrapper.html()).toContain(newLabel)
		expect(wrapper.html()).toContain(newValueLabels.on)
		expect(wrapper.html()).not.toContain(newValueLabels.off)
		expect(wrapper.find('.thumb_good').length).toEqual(1)
		expect(wrapper.find('.thumb').length).toEqual(0)
		expect(wrapper.find('.track_good').length).toEqual(1)
		expect(wrapper.find('.track').length).toEqual(0)
	})
	it('renders the disabled state', () => {
		wrapper.setProps({disabled:true})
		expect(wrapper.find(".track_disabled").length).toEqual(1)
		expect(wrapper.find(".thumb_disabled").length).toEqual(1)
	})
})

describe('User interactions & callbacks', () => {
	let wrapper
	let mockFunction = jest.fn()
	beforeAll(() => {
		wrapper = shallow(<Toggle 
					value={value} 
					onChange={(val) => {
						mockFunction()
						wrapper.setProps({value: val})
					}} 
					label={label} 
					mode={mode}
					valueLabels={valueLabels}
					onFocus={mockFunction}
					onBlur={mockFunction}
					onMouseEnter={mockFunction}
					onMouseLeave={mockFunction}/>)
	})
	beforeEach(() => {
		mockFunction.mockClear()
	})
	it('fires onChange on clicking', () => {
		wrapper.simulate('click')
		expect(mockFunction).toHaveBeenCalled()
		expect(wrapper.find('.thumb_on').length).toEqual(1)
		expect(wrapper.find('.thumb').length).toEqual(0)
		expect(wrapper.find('.track_on').length).toEqual(1)
		expect(wrapper.find('.track').length).toEqual(0)
		expect(wrapper.html()).toContain(valueLabels.on)
	})
	it('resets on clicking again', () => {
		wrapper.simulate('click')
		expect(mockFunction).toHaveBeenCalled()
		expect(wrapper.find('.thumb_on').length).toEqual(0)
		expect(wrapper.find('.thumb').length).toEqual(1)
		expect(wrapper.find('.track_on').length).toEqual(0)
		expect(wrapper.find('.track').length).toEqual(1)
		expect(wrapper.html()).toContain(valueLabels.off)
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