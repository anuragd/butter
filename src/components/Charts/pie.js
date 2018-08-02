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
				chart: {
					type: 'pie'
				},
				credits: {
					enabled: false
				},
				series: [
					{
						...props.options.series[0],
						innerSize: '80%',
						borderWidth: 12,
						borderColor: '#FFFFFF',
						dataLabels: {
							enabled: false,
							softConnector:0,
						}
					}
				]
			}
		}

		this.mouseEnter = this.mouseEnter.bind(this)
		this.mouseLeave = this.mouseLeave.bind(this)
	}

	mouseEnter() {
		this.setState({
			chartOptions: {
				...this.state.chartOptions,
				series: [{
					...this.state.chartOptions.series[0],
					dataLabels: {
						...this.state.chartOptions.series[0].dataLabels,
						enabled: true
					}
				}]
			}
		})
	}

	mouseLeave() {
		this.setState({
			chartOptions: {
				...this.state.chartOptions,
				series: [{
					...this.state.chartOptions.series[0],
					dataLabels: {
						...this.state.chartOptions.series[0].dataLabels,
						enabled: false
					}
				}]
			}
		})
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