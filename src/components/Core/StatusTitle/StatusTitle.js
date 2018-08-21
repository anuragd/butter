import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './StatusTitle.less'
import { SuccessSVG, ErrorSVG } from '../../../utilities/Icons/Icons'

/**
 * Use this inside a header to show app level status
 */

export default class StatusTitle extends Component {
	static propTypes = {
		/**
		 * String label for the scoreboard
		 */
		label: PropTypes.string,
		/**
		 * set to true if you want to display and ok state or false if you want an error state
		 */
		isOk: PropTypes.bool
	}
	static defaultProps = {
		label: 'Title',
		isOk: true
	}
	render() {
		return(
			<div className={styles.statustitle_container}>
				<div className={styles.inner_container}>
					<div className={styles.status}>
						<img src={this.props.isOk?SuccessSVG:ErrorSVG} />
					</div>
					<div className={styles.label}>
						{this.props.label}
					</div>
				</div>
			</div>
		)
	}
}