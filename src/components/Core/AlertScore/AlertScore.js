import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './AlertScore.less'
import { CriticalSVG, MajorSVG, MinorSVG, OtherSVG } from '../../../utilities/Icons/Icons'

export default class AlertScore extends Component {
	static propTypes = {
		/**
		 * Type of alert: `critical`,`major`,`minor` or `other`
		 */
		type: PropTypes.oneOf(['critical','major','minor','other']),
		/**
		 * Number to display
		 */
		score: PropTypes.number
	}
	static defaultProps = {
		type: 'critical',
		score: 0
	}
	render() {
		let icon
		switch(this.props.type) {
			case 'major':
				icon = MajorSVG
				break
			case 'minor':
				icon = MinorSVG
				break
			case 'other':
				icon = OtherSVG
				break
			case 'critical':
			default:
				icon = CriticalSVG
				break
		}
		return(
			<div className={styles.alertscore_container}>
				<div className={styles.inner_container}>
					<div className={styles['icon_'+this.props.type]}>
						<img className={styles.icon_image} src={icon} />
					</div>
					<div className={styles['score_'+this.props.type]}>
						{this.props.score}
					</div>
					<div className={styles.label}>
						{this.props.type}
					</div>
				</div>
			</div>
		)
	}
}