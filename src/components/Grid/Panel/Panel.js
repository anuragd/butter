import React from 'react'
import PropTypes from 'prop-types'

import styles from './Panel.less'

export default class Panel extends React.Component {

	render() {
		return(
			<div className={styles.DCNPanel} {...this.props}>
				<div className={styles.panel_children}>{this.props.children}</div>
			</div>
		)
	}

}