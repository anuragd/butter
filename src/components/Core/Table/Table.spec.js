import React from 'react'
import {shallow, mount} from 'enzyme'

import Table from './Table'

let data = {
	keys: [
	  {key:'switch',label:'Switch',type:'text',sortable:true},
	  {key:'ipAddress',label:'IP Address',type:'text',sortable:true},
	  {key:'serial',label:'Serial No',type:'text',sortable:true},
	  {key:'managed',label:'Managed',type:'text'},
	],
	data: [
	  {id:0,switch:'leaf1',ipAddress:'24.0.80.200',serial:'SAL18432P5Q ',managed:'true'},
	  {id:1,switch:'leaf1',ipAddress:'24.0.80.202',serial:'SAL18432P4S',managed:'true'},
	  {id:2,switch:'leaf2',ipAddress:'24.0.80.201',serial:'SAL18432P4X',managed:'true'},
	  {id:3,switch:'leaf3',ipAddress:'24.0.80.208',serial:'FDO210721L3',managed:'true'},
	  {id:4,switch:'n9k-bg1',ipAddress:'24.0.80.212',serial:'FDO210705NY',managed:'true'},
	  {id:5,switch:'n9k-bg2',ipAddress:'24.0.80.209',serial:'SAL1833YM11',managed:'true'},
	  {id:6,switch:'spine1',ipAddress:'24.0.80.217',serial:'SAL18422FUR',managed:'true'},
	  {id:7,switch:'spine2',ipAddress:'24.0.80.209',serial:'SAL18422FXL',managed:'true'},
	  {id:8,switch:'ste-n9k-18-deep',ipAddress:'24.0.80.311',serial:'SAL18432P11',managed:'true'},
	  {id:9,switch:'ste-n9k-bg1',ipAddress:'24.0.80.303',serial:'FDO21061Q4W',managed:'true'}
	],
}

jest.useRealTimers()

describe('Basic Table render:', () => {
	let wrapper
	beforeAll(() => {
		wrapper = shallow(<Table data={data}/>)
	})
	it('renders all the columns', () => {
		data.keys.forEach((key) => {
			expect(wrapper.html()).toContain(key.label)
		})
	})
	it('renders all the rows and appropriate data', () => {
		data.data.forEach((row) => {
			data.keys.forEach((column) => {
				expect(wrapper.html()).toContain(row[column.key])
			})
		})
	})
})

describe('Sorting functionality', () => {
	let wrapper
	beforeAll(() => {
		wrapper = mount(<Table data={data}/>)
	})
	it('renders sorting icon', () => {
		let sortableColumns = data.keys.filter((key) => key.sortable)
		expect(wrapper.find('.sorters').length).toEqual(sortableColumns.length)
	})
	/* The below test depends on reading DOM positions and cannot be done without a headless browser */
	// it('sorts on clicking icon', () => {
	// 	let serialHeader = wrapper.find('th').at(2)
	// 	expect(serialHeader.html()).toContain(data.keys[2].label)
	// })
})

