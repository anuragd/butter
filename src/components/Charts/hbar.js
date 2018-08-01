import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

import theme from './theme'

export default class hbar extends Component {

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
				chart: {
					type: 'bar'
				},
				plotOptions: {
					bar: {
						colorByPoint: true,
						pointPadding: 0,
						groupPadding: 0,
						borderColor: '#FFFFFF',
						borderWidth: 9,
						dataLabels: {
							enabled: true,
							style: {
								fontSize: '12px'
							}
						}
					}
				},
				xAxis: {
					visible:false
				},
				yAxis: {
					visible: false
				},
				series: [
					{
						...props.options.series[0],
					}
				],
				legend: {
					enabled: false
				}
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