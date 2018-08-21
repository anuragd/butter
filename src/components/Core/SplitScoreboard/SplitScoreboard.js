import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './SplitScoreboard.less'

export default class SplitScoreboard extends Component {
	static propTypes = {
		label: PropTypes.string,
		good: PropTypes.number,
		bad: PropTypes.number
	}
	static defaultProps = {
		label: 'Total'
	}
	render() {
		let value = this.props.value
		if(value > this.props.max) value = this.props.max
		else if(value < 0) value = 0
		return(
			<div className={styles.ssb_container}>
				<div className={styles.inner_container}>
					<div className={styles.score_display}>
						<div className={styles.score}>{this.props.good + this.props.bad}</div>
						<div className={styles.score_breakup}>
							<div className={styles.good_score}>
								<div className={styles.indicator_good}></div>
								<div className={styles.breakup_score}>{this.props.good}</div>
							</div>
							<div className={styles.bad_score}>
								<div className={styles.indicator_bad}></div>
								<div className={styles.breakup_score}>{this.props.bad}</div>
							</div>
						</div>
					</div>
					<div className={styles.label}>
						{this.props.label}
					</div>
				</div>
			</div>
		)
	}
}