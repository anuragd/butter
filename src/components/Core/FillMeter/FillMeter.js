import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './FillMeter.less'

/**
 * Use this component to values that are a percentage of a total
 */

export default class FillMeter extends Component {
	static propTypes = {
		/**
		 * Label for component
		 */
		label: PropTypes.string,
		/**
		 * Value of component. This is displayed alongside the label and used to calculate the width of the fill bar
		 */
		value: PropTypes.number,
		/**
		 * Maximum possible value for of the `value` prop. This is used to calculate the percentage width of the fill bar
		 */
		max: PropTypes.number
	}
	render() {
		let value = this.props.value
		if(value > this.props.max) value = this.props.max
		else if(value < 0) value = 0
		return(
			<div className={styles.fillmeter_container}>
				<div className={styles.inner_container}>
					<div className={styles.label_row}>
						<div className={styles.label}>{this.props.label}</div>
						<div className={styles.value}>{this.props.value}</div>
					</div>
					<div className={styles.barfill}>
						<div 
							className={styles.fill_amount}
							style= {{
								width: ((this.props.value/this.props.max) * 100).toString() + '%'
							}}
						></div>
					</div>
				</div>
			</div>
		)
	}
}