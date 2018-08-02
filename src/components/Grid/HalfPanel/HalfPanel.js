import React from 'react'
import PropTypes from 'prop-types'

import styles from './HalfPanel.less'

export default class HalfPanel extends React.Component {

	render() {
		return(
			<div className={styles.DCNHalfPanel} {...this.props}>
				<div className={styles.panel_children}>{this.props.children}</div>
			</div>
		)
	}

}