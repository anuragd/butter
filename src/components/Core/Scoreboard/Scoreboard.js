import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './Scoreboard.less'

/**
 * Use this component to display a large number with a label
 */

export default class Scoreboard extends Component {
	static propTypes = {
		/**
		 * String label for the scoreboard
		 */
		label: PropTypes.string,
		/**
		 * Value to be displayed
		 */
		value: PropTypes.number
	}
	static defaultProps = {
		label: 'Score',
		value: 0
	}
	render() {
		return(
			<div className={styles.scoreboard_container}>
				<div className={styles.inner_container}>
					<div className={styles.score}>
						{this.props.value}
					</div>
					<div className={styles.label}>
						{this.props.label}
					</div>
				</div>
			</div>
		)
	}
}