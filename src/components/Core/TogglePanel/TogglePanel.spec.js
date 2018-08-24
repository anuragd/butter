import React from 'react'
import {shallow} from 'enzyme'

import TogglePanel from './TogglePanel'
import Toggle from '../../Form/Toggle/Toggle'

let title = "Title"
let newTitle = "Different Stuff"
let value = false
let children = <div className="Fake">Hello</div>

describe('Basic render', () => {
	let wrapper
	beforeAll(() => {
		wrapper = shallow(
			<TogglePanel
				title = {title}
				value = {value}
				onChange = {(val) => wrapper.setProps(val)}>
				{children}
			</TogglePanel>
		)
	})
	it("should render the title", () => {
		expect(wrapper.html()).toContain(title)
	})
	it("should render the toggle", () => {
		expect(wrapper.find(Toggle).length).toEqual(1)
	})
	it("should render the children", () => {
		expect(wrapper.html()).toContain("Fake")
		expect(wrapper.html()).toContain("Hello")
	})
	it("should update title on changing props", () => {
		wrapper.setProps({title: newTitle})
		expect(wrapper.html()).toContain(newTitle)
		expect(wrapper.html()).not.toContain(title)
	})
	it("should update state on changing value prop", () => {
		wrapper.setProps({value: true})
		expect(wrapper.find(Toggle).prop('value')).toBeTruthy()
	})
})

describe("User interactions", () => {
	let wrapper
	let mockFunction = jest.fn()
	beforeAll(() => {
		wrapper =  shallow(
			<TogglePanel
				title = {title}
				value = {value}
				onChange = {(val) => {
					mockFunction()
					wrapper.setProps(val)
				}}>
				{children}
			</TogglePanel>
		)
	})
	it("should change toggle state and fire onChange on clicking", () => {
		expect(wrapper.find(Toggle).prop('value')).not.toBeTruthy()
		wrapper.find(Toggle).simulate('click')
		setTimeout(() => {
			expect(wrapper.find(Toggle).prop('value')).toBeTruthy()
			expect(mockFunction).toHaveBeenCalled()
		},0)
	})
})
