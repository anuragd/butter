import React, { Component } from 'react'
import { DCNCharts } from 'dcn-network-insights-ux'




/**
 * Panel for displaying a note to users that a component has no data to display. It is important that this component is placed inside a container with a definite max-height set, or it will take all of the screen space vertically.
 *
 * Requires a minimum width of 280px
 * @version 0.0.1
 */
export default class Charts extends Component {

	constructor(props) {
		super(props)
		this.state = {
			data: (() => {
				let result = []
				for(var i=0; i<50; i++) {
					result.push(Math.random() * 10)
				}
				return result
			})()
		}
	}

	render() {
		console.log(this.state.data)
		const options = {
			title: {
				text: 'CPU Utilization'
			},
			series:[
				{
					name: 'Dummy Series',
					data: this.state.data
				}
			]
		}
		return (
		  <div>
		    <DCNCharts.area options={options}/>
		    <DCNCharts.pie options={options}/>
		    <DCNCharts.vbar options={options}/>
		    <DCNCharts.hbar options={options}/>
		  </div>
		)
	}
}
