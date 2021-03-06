import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Highcharts from 'highcharts'
import Drilldown from 'highcharts/modules/drilldown'
import HighchartsReact from 'highcharts-react-official'
Drilldown(Highcharts)

import theme from '../theme'
import styles from '../Charts.less'

/**
 * Wrapper around HighCharts Pie graph.
 *
 * @version 0.0.1
 */
export default class Pie extends Component {

	static propTypes = {
		options: PropTypes.object,
		icon: PropTypes.string,
		label: PropTypes.string
	}

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
					height: '100%'
				},
				credits: {
					enabled: false
				},
				plotOptions: {
					pie: {
						colors: ['#78B9DF'],
						center: ["50%","50%"],
						innerSize: '70%',
						borderWidth: 8,
						borderColor: '#FFFFFF',
						dataLabels: {
							enabled: true,
							inside: true,
							softConnector:0,
							distance: 10
						}
					}
				},
				title:''
			}
		}

	}

	render() {
		return (
			<div className={styles.chart_container}>
				<HighchartsReact
				    highcharts={Highcharts}
				    options={this.state.chartOptions}
				  />
				{this.props.icon && 
					<div className={styles.center_display}>
						<img src={this.props.icon} className={styles.icon} />
						<div className={styles.label}>{this.props.label}</div>
					</div>
				 }
			</div>
		)
	}

}