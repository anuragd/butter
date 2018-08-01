import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

import theme from './theme'

export default class pie extends Component {

	constructor(props) {
		super(props)
		//Throw error if data has more or less than one specified series
		if(!props.options || !props.options.series || !props.options.series instanceof Array || !(props.options.series.length === 1)) {
			console.error('DCNCharts.pie can only run for a single series of data')
			return
		}

		this.state = {
			chartOptions: {
				...props.options,
				...theme,
				legend: {
					enabled: false
				},
				credits: {
					enabled: false
				},
				chart: {
					type: 'areaspline',
				},
				yAxis: {
					gridLineColor: '#FFFFFF',
					gridLineWidth: 1,
					gridZIndex:4
				},
				plotOptions: {
					areaspline: {
						marker: {
							enabled: false
						},
						color: {
							linearGradient: {x1:0.5,y1:0, x2:0.5,y2:1},
							stops: [
								[0, '#D92780'],
								[0.5, '#FF7D85'],
								[1, '#FFC87D']
							]
						}
					}
				},
				series: [
					{
						...props.options.series[0],
						dataLabels: {
							enabled: false
						}
					}
				]
			}
		}

		this.mouseEnter = this.mouseEnter.bind(this)
		this.mouseLeave = this.mouseLeave.bind(this)
	}

	mouseEnter() {
		
	}

	mouseLeave() {
		
	}

	render() {
		return (
			<div onMouseOver = {this.mouseEnter} onMouseOut = {this.mouseLeave}>
				<HighchartsReact
				    highcharts={Highcharts}
				    options={this.state.chartOptions}
				  />
			</div>
		)
	}

}