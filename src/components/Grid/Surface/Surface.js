import React from 'react'
import PropTypes from 'prop-types'

import styles from './Surface.less'

export default class Surface extends React.Component {

	render() {
		return(
			<div className={styles.DCNSurface} {...this.props}>
				{this.props.children}
			</div>
		)
	}

}