import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

import theme from '../theme'
import styles from '../Charts.less'

/**
 * Wrapper around HighCharts Bar graph.
 *
 * @version 0.0.1
 */
export default class Hbar extends Component {

	constructor(props) {
		super(props)
		//Throw error if data has more or less than one specified series
		if(!props.options || !props.options.series || !props.options.series instanceof Array || !(props.options.series.length === 1)) {
			console.error('DCNCharts.hbar can only run for a single series of data')
			return
		}

		this.state = {
			chartOptions: {
				...props.options,
				...theme,
				chart: {
					type: 'bar',
					height: '100%'
				},
				credits: {
					enabled: false
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
				},
				title:''
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
			<div onMouseOver = {this.mouseEnter} onMouseOut = {this.mouseLeave} className={styles.chart_container}>
				<HighchartsReact
				    highcharts={Highcharts}
				    options={this.state.chartOptions}
				  />
			</div>
		)
	}

}