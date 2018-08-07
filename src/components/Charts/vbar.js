import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

import theme from './theme'
import styles from './Charts.less'

export default class Vbar extends Component {

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
					type: 'column',
					height: '100%'
				},
				credits: {
					enabled: false
				},
				plotOptions: {
					column: {
						groupPadding:0.1,
						pointPadding:0,
						borderWidth:0,
						pointWidth:16,
						borderRadius: 8,
						borderColor:'#FFFFFF',
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
			<div onMouseOver = {this.mouseEnter} onMouseOut = {this.mouseLeave} className={styles.vbar_container}>
				<div className={styles.vbar}>
					<HighchartsReact
					    highcharts={Highcharts}
					    options={this.state.chartOptions}
					  />
				 </div>
			</div>
		)
	}

}