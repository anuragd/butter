import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

import theme from './theme'
import styles from './Charts.less'

export default class Pie extends Component {

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
					type: 'pie',
					height: '100%',
					margin: [0, 0, 0, 0],
			        spacingTop: 0,
			        spacingBottom: 0,
			        spacingLeft: 0,
			        spacingRight: 0
				},
				credits: {
					enabled: false
				},
				plotOptions: {
					pie: {
						size: '100%',
						minSize: 60
					}
				},
				series: [
					{
						...props.options.series[0],
						innerSize: '70%',
						borderWidth: 12,
						borderColor: '#FFFFFF',
						dataLabels: {
							enabled: false,
							softConnector:0,
						}
					}
				],
				title:''
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
			<div onMouseOver = {this.mouseEnter} onMouseOut = {this.mouseLeave} className={styles.chart_container}>
				<HighchartsReact
				    highcharts={Highcharts}
				    options={this.state.chartOptions}
				  />
			</div>
		)
	}

}