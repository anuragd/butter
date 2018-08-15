import React from 'react'
import {shallow} from 'enzyme';

import ProgressBar from './ProgressBar'

let message = "Test progress message"
let newMessage = "This is a new message"
let progress = 52
console.error = jest.fn()

describe('Basic ProgressBar render:', () => {
	let wrapper
	beforeAll(() => {
		wrapper = shallow(<ProgressBar message={message} progress={progress} failed={false}/>)
	})
	it('renders the message', () => {
		expect(wrapper.html()).toContain(message)
	})
	it('renders the progress amount', () => {
		expect(wrapper.html()).toContain(progress)
		expect(wrapper.find('.progress_finish_bg').props().style.width).toEqual(progress.toString() + '%')
	})
})

describe('Failed state rendering', () => {
	it('renders the appropriate fail state', () => {
		let wrapper = shallow(<ProgressBar message={message} progress={progress} failed={true}/>)
		expect(wrapper.html()).toContain('Failed')
		expect(wrapper.find('.progress_fail_bg').props().style.width).toEqual(progress.toString() + '%')
	})
	it('throws an error when progress is set beyond 0-100', () => {
		let wrapper = shallow(<ProgressBar message={message} progress={progress} failed={false}/>)
		wrapper.setProps({progress: 130})
		expect(wrapper.find('.progress_finish_bg').props().style.width).toEqual('100%')
		wrapper.setProps({progress: -20})
		expect(wrapper.find('.progress_finish_bg').props().style.width).toEqual('0%')
		expect(console.error).toHaveBeenCalled()
	})
})

describe('Updates progress amount & message on changing props', () => {
	let wrapper
	beforeAll(() => {
		wrapper = shallow(<ProgressBar message={message} progress={progress} failed={false}/>)
		wrapper.setProps({progress: progress+20})
		wrapper.setProps({message:newMessage})
	})
	it('renders the appropriate number in the progress display', () => {
		expect(wrapper.html()).toContain((progress+20).toString())
	})
	it('renders an appropriate width of the completion marker', () => {
		expect(wrapper.find('.progress_finish_bg').props().style.width).toEqual((progress+20).toString() + '%')
	})
	it('updates message on changing props', () => {
		expect(wrapper.html()).toContain(newMessage)
	})
})

