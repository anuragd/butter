import React from 'react'
import {shallow} from 'enzyme';

import ProgressBarMini from './ProgressBarMini'

let message = "Test progress message"
let progress = 52
let newMessage = "This is a new message"
console.error = jest.fn()

describe('Basic ProgressBarMini render:', () => {
	let wrapper
	beforeAll(() => {
		wrapper = shallow(<ProgressBarMini message={message} progress={progress} failed={false}/>)
	})
	it('renders the message', () => {
		expect(wrapper.html()).toContain(message)
	})
	it('renders the progress amount', () => {
		expect(wrapper.find('.progress_finish_bg').props().style.width).toEqual(progress.toString() + '%')
	})
})

describe('Failed state rendering', () => {
	it('renders the appropriate fail state', () => {
		let wrapper = shallow(<ProgressBarMini message={message} progress={progress} failed={true}/>)
		expect(wrapper.find('.progress_fail_bg').props().style.width).toEqual(progress.toString() + '%')
	})
	it('throws an error when progress is set beyond 0-100', () => {
		let wrapper = shallow(<ProgressBarMini message={message} progress={progress} failed={false}/>)
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
		wrapper = shallow(<ProgressBarMini message={message} progress={progress} failed={false}/>)
		wrapper.setProps({progress: progress+20})
		wrapper.setProps({message:newMessage})
	})
	it('renders an appropriate width of the completion marker', () => {
		expect(wrapper.find('.progress_finish_bg').props().style.width).toEqual((progress+20).toString() + '%')
	})
	it('updates message on changing props', () => {
		expect(wrapper.html()).toContain(newMessage)
	})
})

