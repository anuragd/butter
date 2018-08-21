import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './IconScore.less'

/**
 * Use this component to display a number alongside an icon from the IconLib package
 */

export default class IconScore extends Component {
	static propTypes = {
		/**
		 * icon from the IconLib package. See example for how to use this
		 */
		icon: PropTypes.string,
		/**
		 * Number to display aloingside
		 */
		value: PropTypes.number
	}
	render() {
		return(
			<div className={styles.iconscore}>
				<div className={styles.inner_container}>
					<div className={styles.value}>{this.props.value}</div>
					<img src={this.props.icon} className={styles.icon}/>
				</div>
			</div>
		)
	}
}