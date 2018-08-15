import React from 'react'
import {shallow} from 'enzyme';

import Textarea from './Textarea'

let label = "Textarea label"
let testValue = "test value"
let newTestValue= "new test value"
let errorString = "This is an error"

describe('Basic Textarea render', () => {
	let wrapper
	beforeAll(() => {
		wrapper = shallow(<Textarea label={label} value={null} onChange={(val) => wrapper.setProps({value:val})} />)
	})
	it('renders the default state without value', () => {
		expect(wrapper.find('.float_label').length).toEqual(1)
		expect(wrapper.find('.float_label').text()).toEqual(label)
		expect(wrapper.find('textarea').props().value).not.toBeTruthy()
	})
	it('renders the default state with value', () => {
		wrapper.setProps({value:testValue})
		expect(wrapper.find('.float_focus').length).toEqual(1)
		expect(wrapper.find('.float_focus').text()).toEqual(label)
		expect(wrapper.find('textarea').props().value).toEqual(testValue)
	})
	it('renders validated state', () => {
		wrapper.setProps({validated: true})
		expect(wrapper.find('.validated').length).toEqual(1)
		expect(wrapper.find('.validated').html()).toContain('svg')

		//Default checks
		expect(wrapper.find('.float_focus').length).toEqual(1)
		expect(wrapper.find('textarea').props().value).toEqual(testValue)
	})
	it('renders invalidated state', () => {
		wrapper.setProps({validated: false, invalid: errorString})
		expect(wrapper.find('.validated').length).toEqual(0)
		expect(wrapper.find('.error').length).toEqual(1)
		expect(wrapper.find('.error').text()).toEqual(errorString)

		//Default checks
		expect(wrapper.find('.float_focus').length).toEqual(1)
		expect(wrapper.find('textarea').props().value).toEqual(testValue)
	})
	it('renders the disabled state', () => {
		wrapper.setProps({disabled: true})
		expect(wrapper.find('textarea').props().disabled).toBeTruthy()
		expect(wrapper.find('.float_focus').length).toEqual(1)
		expect(wrapper.find('.float_focus').text()).toEqual(label)
		wrapper.setProps({value: null})
		expect(wrapper.find('.float_disable').text()).toEqual(label)
	})
	it('renders updated label', () => {
		wrapper.setProps({label: testValue, disabled: false})
		expect(wrapper.find('.float_label').length).toEqual(1)
		expect(wrapper.find('.float_label').text()).toEqual(testValue)
	})
	it('renders updated value', () => {
		wrapper.setProps({value: newTestValue})
		expect(wrapper.find('textarea').props().value).toEqual(newTestValue)
	})
	it('renders the disabled state', () => {
		wrapper.setProps({disabled: true})
		expect(wrapper.find('textarea').props().disabled).toBeTruthy()
	})
})

describe("Callbacks", () => {
	let wrapper
	let mockFunction = jest.fn()
	let mockWrapper = (...args) => mockFunction(args)
	beforeAll(() => {
		wrapper = shallow(
			<Textarea
				label={label}
				value={testValue}
				onChange={(val) => {
					mockWrapper()
					wrapper.setProps({value:val})
				}}
				onFocus={mockWrapper}
				onBlur={mockWrapper}
				onMouseEnter={mockWrapper}
				onMouseLeave={mockWrapper}
				/>
		)
	})
	beforeEach(() => {
		mockFunction.mockClear()
	})
	it('fires the onChange callback', () => {
		wrapper.find('textarea').simulate('change',{target:{value:newTestValue}})
		expect(mockFunction).toHaveBeenCalled()
		expect(wrapper.find('textarea').props().value).toEqual(newTestValue)
	})
	it('fires onFocus event', () => {
		wrapper.find('textarea').simulate('focus')
		expect(mockFunction).toHaveBeenCalled()
	})
	it('fires onBlur event', () => {
		wrapper.find('textarea').simulate('blur')
		expect(mockFunction).toHaveBeenCalled()
	})
	it('fires onMouseEnter event', () => {
		wrapper.find('textarea').simulate('mouseenter')
		expect(mockFunction).toHaveBeenCalled()
	})
	it('fires onMouseLeave event', () => {
		wrapper.find('textarea').simulate('mouseleave')
		expect(mockFunction).toHaveBeenCalled()
	})
})