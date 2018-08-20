import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './StatusTitle.less'
import { SuccessSVG, ErrorSVG } from '../../../utilities/Icons/Icons'

export default class StatusTitle extends Component {
	static propTypes = {
		/**
		 * String label for the scoreboard
		 */
		label: PropTypes.string,
		/**
		 * set to true if you want to display and ok state or false if you want an error state
		 */
		isOK: PropTypes.bool
	}
	static defaultProps = {
		label: 'Title',
		isOK: true
	}
	render() {
		return(
			<div className={styles.statustitle_container}>
				<div className={styles.inner_container}>
					<div className={styles.status}>
						<img className={this.props.isOK?styles.show:styles.hide} src={SuccessSVG} />
						<img className={this.props.isOK?styles.hide:styles.show} src={ErrorSVG} />
					</div>
					<div className={styles.label}>
						{this.props.label}
					</div>
				</div>
			</div>
		)
	}
}