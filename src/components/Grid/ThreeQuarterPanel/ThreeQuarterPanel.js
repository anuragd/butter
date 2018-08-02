import React from 'react'
import PropTypes from 'prop-types'

import styles from './ThreeQuarterPanel.less'

export default class ThreeQuarterPanel extends React.Component {

	render() {
		return(
			<div className={styles.DCNThreeQuarterPanel} {...this.props}>
				<div className={styles.panel_children}>{this.props.children}</div>
			</div>
		)
	}

}