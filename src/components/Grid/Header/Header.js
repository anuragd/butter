import React from 'react'
import PropTypes from 'prop-types'

import styles from './Header.less'

export default class Header extends React.Component {

	render() {
		return(
			<div className={styles.DCNHeader} {...this.props}>
				{this.props.children}
			</div>
		)
	}

}