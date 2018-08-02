import React from 'react'
import PropTypes from 'prop-types'

import styles from './QuarterPanel.less'

export default class QuarterPanel extends React.Component {

	render() {
		return(
			<div className={styles.DCNQuarterPanel} {...this.props}>
				<div className={styles.panel_children}>{this.props.children}</div>
			</div>
		)
	}

}