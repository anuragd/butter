import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Toggle from '../../Form/Toggle/Toggle'

import styles from './TogglePanel.less'

export default class TogglePanel extends Component {

	static propTypes = {
		/**
		 * Label for the control
		 */
		title: PropTypes.string,
		/**
		 * Current state of the component's toggle
		 */
		value: PropTypes.bool,
		/**
		 * Function fired whenever user clicks on the toggle. Must be used to pass the modified value back to the component. Parameter passed is the current value
		 */
		onChange: PropTypes.func.isRequired,
	}

	render() {
		return(
			<div className={styles.togglepanel_container}>
				<div className={styles.inner_container}>
					{ this.props.title && <div className={styles.title}>{this.props.title}</div> }
					<div className={styles.children}>{this.props.children}</div>
					<div className={styles.toggle}>
						<Toggle
							label="Data"
							value={this.props.value}
							onChange={this.props.onChange}
							mode="NORMAL"
							flip />
					</div>
				</div>
			</div>
		)
	}

}