import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './IconButton.less'

export default class IconButton extends Component {
	static propTypes = {
		/**
		 * icon from the IconLib package
		 */
		icon: PropTypes.string,
		/**
		 * onclick function
		 */
		onClick: PropTypes.function
	}
	render() {
		return(
			<div className={styles.iconbutton_container}>
				<div className={styles.inner_container} onClick={this.props.onClick}>
					<img src={this.props.icon} />
				</div>
			</div>
		)
	}
}