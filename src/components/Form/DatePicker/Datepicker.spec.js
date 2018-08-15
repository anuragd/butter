import React from 'react'
import { shallow, mount } from 'enzyme'
import moment from 'moment'

import Datepicker from './Datepicker'

let label = "Datepicker label"
let value = new Date()
let minDate = new Date(2000,1,1)
let maxDate = new Date(2080,12,31)
let defaultFormat = 'D MMM YYYY' //Should not be hardcoded in the future

describe('Basic datepicker render', () => {
	let wrapper
	beforeAll(() => {
		wrapper = shallow(
			<Datepicker 
			  label={label} 
			  value={null} 
			  onChange={(val) => wrapper.setProps({value:val})}
			  min={minDate}
			  max={maxDate}/>
		)
	})
	it('renders the label with no value present', () => {
		expect(wrapper.html()).toContain(label)
		expect(wrapper.find('.label').text()).toEqual(label)
	})
	it('renders the label with a value present', () => {
		wrapper.setProps({value: new Date()})
		expect(wrapper.html()).toContain(label)
		expect(wrapper.find('.small_label').text()).toEqual(label)
	})
	it('renders the selected date', () => {
		expect(wrapper.find('input').props().value).toEqual(moment().format(defaultFormat))
	})
	it('updates values on updating props', () => {
		wrapper.setProps({value: new Date(2001,1,1)})
		expect(wrapper.find('input').props().value).toEqual(moment(new Date(2001,1,1)).format(defaultFormat))
	})
	it('opens the calendar when clicked', () => {
		wrapper.find('.header').simulate('click')
		expect(wrapper.find('.calendar_container').length).toEqual(1)
		//Reset component
		wrapper.find('.icon img').at(1).simulate('click')
	})
	it('renders the disabled state', () => {
		wrapper.setProps({disabled: true, value: null})
		expect(wrapper.find('.disabled_datepicker').length).toEqual(1)
		expect(wrapper.find('.disabled_label').length).toEqual(1)
		expect(wrapper.find('.disabled_icon').length).toEqual(1)
		wrapper.find('.header').simulate('click')
		expect(wrapper.find('.calendar_container').length).toEqual(0)
	})
})

describe("User interactions & callbacks", () => {
	let wrapper
	let mockFunction = jest.fn()
	beforeAll(() => {
		wrapper = mount(
			<Datepicker 
			  label={label} 
			  value={null} 
			  onChange={(val) => {
			  	mockFunction()
			  	wrapper.setProps({value:val})
			  }}
			  min={minDate}
			  max={maxDate}
			  onMouseEnter={mockFunction}
			  onMouseLeave={mockFunction}
			  onFocus={mockFunction}
			  onBlur={mockFunction}/>
		)
	})
	beforeEach(() => {
		mockFunction.mockClear()
	})
	it('opens the calendar when clicked', () => {
		wrapper.find('.header').simulate('click')
		expect(wrapper.find('.calendar_container').length).toEqual(1)
	})
	it('goes to next month on clicking arrow', () => {
		let currentMonth = wrapper.state('currentMonth').month
		wrapper.find('.next_month_control').simulate('click')
		setTimeout(() => {
			expect(wrapper.state('currentMonth').month).toEqual(currentMonth+1)
		},0)
		
	})
	it('goes to prev month on clicking arrow', () => {
		let currentMonth = wrapper.state('currentMonth').month
		wrapper.find('.last_month_control').simulate('click')
		setTimeout(() => {
			expect(wrapper.state('currentMonth').month).toEqual(currentMonth-1)
		},0)
		
	})
	it('changes calendar on changing month', () => {
		wrapper.find('Dropdown').at(0).find('.header').simulate('click')
		wrapper.find('Dropdown').at(0).find('.options li').at(2).simulate('click')
		setTimeout(() => {
			expect(wrapper.state('currentMonth').month).toEqual(2)
		}, 200)
	})
	it('changes calendar on changing year', () => {
		wrapper.find('Dropdown').at(1).find('.header').simulate('click')
		wrapper.find('Dropdown').at(1).find('.options li').at(2).simulate('click')
		setTimeout(() => {
			expect(wrapper.state('currentMonth').year).toEqual('2002')
		}, 200)
	})
	it('fires onChange event on selecting date', () => {
		expect(wrapper.find('.calendar_container').length).toEqual(1)
		let cells = wrapper.find('.day_cell')
		cells.at(cells.length-1).simulate('click')
		const lastDayOfCurrentMonth = moment().month(wrapper.state('currentMonth').month).endOf('month').date()
		expect(moment(wrapper.prop('value')).date()).toEqual(lastDayOfCurrentMonth)
	})
	it('fires onMouseEnter event', () => {
		wrapper.find('.datepicker').simulate('mouseenter')
		expect(mockFunction).toHaveBeenCalled()
	})
	it('fires onMouseLeave event', () => {
		wrapper.find('.datepicker').simulate('mouseleave')
		expect(mockFunction).toHaveBeenCalled()
	})
	it('fires onFocus event', () => {
		wrapper.find('.datepicker').simulate('focus')
		expect(mockFunction).toHaveBeenCalled()
	})
})