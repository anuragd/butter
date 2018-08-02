import React from 'react'
import PropTypes from 'prop-types'

import styles from './Container.less'

export default class Container extends React.Component {

	render() {
		return(
			<div className={styles.DCNcontainer} {...this.props}>
				{this.props.children}
			</div>
		)
	}

}