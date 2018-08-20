import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './FillMeter.less'

export default class FillMeter extends Component {
	static propTypes = {
		label: PropTypes.string,
		value: PropTypes.number,
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